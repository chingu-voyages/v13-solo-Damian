const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({
    priority: [1, 2, 3, 4, 5],
    status: ['New', 'In Progress', 'Testing', 'Closed', 'Rejected']
  })
})

module.exports = router
