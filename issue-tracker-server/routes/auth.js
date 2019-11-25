const express = require('express')
const router = express.Router()
const { hash, compare } = require('bcryptjs')
const { verify } = require('jsonwebtoken')
const { createAccessToken, createRefreshToken } = require('../utils/tokens')
const REFRESH_TOKEN_COOKIE = 'dupa1234'
const Users = require('../models/user')
const REFRESH_TOKEN_PATH = '/auth/refresh_token'
const isAuth = require('../utils/authChecker')
router
  .get('/', async (req, res, next) => {
    res.send({ ok: 'ok' })
  })
  .post('/register', async (req, res, next) => {
    const { email, password } = req.body
    const user = await Users.findOne({ email })
    console.log('USER: ' + JSON.stringify(user)) // TODO remove later
    if (user) {
      return res.status(400).json({ error: 'User already exists', user })
    } // TODO only for debugging! REMOVE sending whole user with password in resp
    const hashedPassword = await hash(password, 10)
    new Users({ email, password: hashedPassword }).save()
    res.json({ message: 'user created' })
  })
  .post('/login', async (req, res, next) => {
    const { email, password } = req.body
    try {
      const user = await Users.findOne({ email })
      if (!user) {
        throw new Error('user not found')
      }
      const isValid = await compare(password, user.password)
      if (!isValid) throw new Error('invalid Password')
      const accessToken = createAccessToken(user.id)
      const refreshToken = createRefreshToken(user.id)
      user.refreshToken = refreshToken
      user.save()
      sendRefreshToken(res, refreshToken)
      sendAccessToken(req, res, accessToken)
    } catch (err) {
      res.status(400).send({ error: `${err.message}` })
    }
  })
  .post('/logout', async (req, res) => {
    const { email } = req.body
    try {
      const user = await Users.findOne({ email })
      if (!user) {
        throw new Error('user not found')
      }
      user.refreshToken = ''
      user.save()
      res.clearCookie(REFRESH_TOKEN_COOKIE, { path: REFRESH_TOKEN_PATH })
      res.send({ message: 'logged out' })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  })
  .get('/protected', async (req, res) => {
    try {
      const userId = isAuth(req)
      console.log('User is authenticated: ' + userId)
      if (userId !== null) {
        res.send({ message: 'this is protected data' })
      }
    } catch (error) {
      res.status(401).send({ error: error.message })
    }  
  })
  .post('/refresh_token', async (req, res) => {
    const token = req.cookies[REFRESH_TOKEN_COOKIE]
    const secret = process.env.REFRESH_TOKEN_SECRET
    if (!token) {
      return res.status(400).send({ message: 'Token cookie not set' })
    }
    let payload = null
    try {
      payload = verify(token, secret)
    } catch (err) {
      return res.status(400).send({ message: err.message })
    }
    const user = await Users.findById(payload.userId)
    if (!user) {
      return res.send({ message: 'user not found' })
    }
    if (user.refreshToken !== token) {
      return res.send({ message: 'refresh token invalid' })
    }
    const accessToken = createAccessToken(user.id)
    const refreshToken = createRefreshToken(user.id)
    user.refreshToken = refreshToken
    sendRefreshToken(res, refreshToken)
    sendAccessToken(req, res, accessToken)
  })

const sendAccessToken = (req, res, accessToken) => {
  res.json({
    email: req.body.email,
    accessToken
  })
}
const sendRefreshToken = (res, refreshToken) => {
  res.cookie(REFRESH_TOKEN_COOKIE, refreshToken, {
    httpOnly: true,
    path: REFRESH_TOKEN_PATH
  })
}

module.exports = router
