const { verify } = require('jsonwebtoken')

const isAuth = req => {
  const authorization = req.headers['authorization']
  if (!(authorization && authorization.startsWith("bearer")) ) throw new Error('You need to login')
  const token = authorization.split(' ')[1]
  const { userId } = verify(token, process.env.ACCES_TOKEN_SECRET)
  return userId
}

module.exports = isAuth

