const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  issue: { type: Schema.Types.ObjectId, ref: 'Issue' },
  commentText: { type: String, required: true },
  created_on: { type: Date, required: true, default: Date.now() }
})

module.exports = mongoose.model('Comment', commentSchema)
