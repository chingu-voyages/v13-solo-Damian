require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const issuesRouter = require('./routes/issues')
const authRouter = require('./routes/auth')
const settingsRouter = require('./routes/settings')

const cors = require('cors')
const app = express()
const SERVER_PORT =
  (process.env.MODE === 'SERVER'
    ? process.env.PORT
    : process.env.SERVER_PORT) || 3030
const mongoose = require('mongoose')
const Sentry = require('@sentry/node');
const SENTRY_DNS = process.env.SENTRY_DNS
Sentry.init({ dsn: SENTRY_DNS });
mongoose.set('useFindAndModify', false)

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/issues', issuesRouter)
app.use('/auth', authRouter)
app.use('/settings', settingsRouter)

app.use(function (err, req, res, next) {
  res.status(err.status || 400)
  return res.send(err.message)
})
const DB_URI = process.env.MONGOLAB_URI
console.log(`Connecting to database:  ${DB_URI}`)
mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
module.exports = app
