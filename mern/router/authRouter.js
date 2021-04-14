const router = require('express').Router()
router.get('/', (req, res) => {
  res.json('auth ok')
})
router.post('/', (req, res) => {
  res.json('created')
})
module.exports = router
