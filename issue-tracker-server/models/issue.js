const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Comment = require('./comment')
const issueSchema = new Schema({
  issue_title: { type: String, required: true },
  issue_id: { type: String, required: false },
  project: { type: String, required: true },
  issue_text: { type: String, required: true },
  created_on: { type: Date, required: true, default: Date.now() },
  updated_on: { type: Date, required: true, default: Date.now() },
  created_by: { type: String, required: true },
  assigned_to: { type: String, required: false },
  status_text: { type: String, required: false },
  priority: { type: Number, required: true, default: 1 },
  open: { type: Boolean, required: true, default: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

issueSchema.methods.addComment = function (commentBody) {
  const that = this
  const comment = new Comment(commentBody)
  return comment.save().then(c => {
    that.comments.push(c._id)
    return c
  })
}

module.exports = mongoose.model('Issue', issueSchema)
