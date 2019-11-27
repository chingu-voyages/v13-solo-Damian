const express = require('express')
const router = express.Router()
const Issue = require('../models/issue')

router
  .get('/projects', (req, res, next) => {
    Issue.find()
      .distinct('project')
      .then(result => res.json(result))
      .catch(error => next(error))
  })
  .get('/:project', (req, res, next) => {
    const project = req.params.project
    const filter = { ...req.query, project }
    Issue.find(filter)
      .then(result => res.json(result))
      .catch(error => next(error))
  })
  .get('/details/:id', (req, res, next) => {
    Issue.findById(req.params.id)
      .then(result => res.json(result))
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
  .put('/:project', (req, res, next) => {
    Issue.findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(() => {
        return res.json({ message: `successfully updated ${req.body._id}` })
      })
      .catch(error => next(error))
  })
  .delete('/:project', (req, res, next) => {
    Issue.deleteOne({ _id: req.body._id })
      .then(() => res.json({ message: `deleted ${req.body._id}` }))
      .catch(error => next(error))
  })

module.exports = router
