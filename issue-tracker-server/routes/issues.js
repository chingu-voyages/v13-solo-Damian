const express = require('express')
const router = express.Router()
const Issue = require('../models/issue')
const Comment = require('../models/comment')

router
  .get('/:project/search', (req, res, next) => {
    const project = req.params.project
    const query = req.query
    console.log(JSON.stringify(query))
    const filter = { ...req.query, project }
    Issue.find(filter)
      .then(result => res.json(result))
      .catch(error => next(error))
  })
  .get('/projects', (req, res, next) => {
    Issue.find()
      .distinct('project')
      .then(result => res.json(result))
      .catch(error => next(error))
  })
  .get('/:project', paginatedResults(Issue), (req, res, next) => {
    try {
      res.json(res.paginatedResults)
    } catch (error) {
      next(error)
    }
  })
  .get('/details/:id', (req, res, next) => {
    Issue.findById(req.params.id)
      .then(result => res.json(result))
      .catch(error => next(error))
  })
  .put('/details/:_id', (req, res, next) => {
    const { _id } = req.params
    const update = { ...req.body }
    console.log('update: ' + JSON.stringify(update))
    Issue.findByIdAndUpdate(_id, update)
      .then(data => {
        return res.json({ message: data })
      })
      .catch(error => next(error))
  })
  .delete('/details/:_id', (req, res, next) => {
    const { _id } = req.params
    Issue.deleteOne({ _id })
      .then(data => {
        return res.json({ message: data })
      })
      .catch(error => next(error))
  })
  .post('/:project', (req, res, next) => {
    const project = req.params.project
    const issue = new Issue({ ...req.body, project })
    issue
      .save()
      .then(data => {
        res.json(data)
      })
      .catch(error => next(error))
  })
  .post('/:issueId/comments', (req, res, next) => {
    const { issueId } = req.params
    const comment = { ...req.body, ...{ issue: issueId } }
    Issue.findById(issueId)
      .then(issue => issue.addComment(comment))
      .then(comment => res.json(comment))
      .catch(error => next(error))
  })
  .delete('/comments/:commentId', (req, res, next) => {
    const { commentId, issueId } = req.params
    Comment.deleteOne({ _id: commentId })
      .then(data => res.json({ message: data }))
      .catch(error => next(error))
  })
  .get('/:issueId/comments', (req, res, next) => {
    const { issueId } = req.params
    Comment.find({ issue: issueId })
      .then(data => res.json(data))
      .catch(error => next(error))
  })

function paginatedResults (model) {
  return async (req, res, next) => {
    const filter = { ...req.query }
    delete filter.page
    delete filter.limit
    const count = await model.find(filter).countDocuments()
    console.log('Count ' + count)
    const { limit, page } = req.query
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const results = {}

    if (endIndex < count) {
      results.next = {
        page: parseInt(page) + 1,
        limit: limit
      }
    }
    if (startIndex > 0) {
      results.previous = {
        page: parseInt(page) - 1,
        limit: limit
      }
    }
    results.pages =
      count / limit % limit == 0 ? count / limit : parseInt(count / limit) + 1
    try {
      results.issues = await model.find(filter, null, {
        skip: parseInt(startIndex),
        limit: parseInt(limit),
        desc: 'updated_on'
      })
      res.paginatedResults = results
      next()
    } catch (error) {
      console.log(JSON.stringify(error))
      next(new Error('Cannot get data from db (T⌓T)'))
    }
  }
}

module.exports = router
