const express = require('express')
const router = express.Router()
const Issue = require('../models/issue')

router
  .get('/:project', (req, res, next) => {
    const project = req.params.project
    const filter = { ...req.query, project }
    Issue.find(filter)
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

module.exports = router
