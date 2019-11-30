const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  refreshToken: { type: String, required: false },
  displayName: { type: String, required: false },
  defaultProject: { type: String, required: false, default: 'test' }
})
module.exports = mongoose.model('User', userSchema)
