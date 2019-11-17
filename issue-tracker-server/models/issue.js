const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  issue_title: { type: String, required: true },
  project: { type: String, required: true },
  issue_text: { type: String, required: true },
  created_on: { type: Date, required: true, default: Date.now() },
  updated_on: { type: Date, required: true, default: Date.now() },
  created_by: { type: String, required: true },
  assigned_to: { type: String, required: false },
  status_text: { type: String, required: false },
  priority: { type: Number, required: true, default: 1 },
  open: { type: Boolean, required: true, default: true }
})
module.exports = mongoose.model('Issue', issueSchema)
