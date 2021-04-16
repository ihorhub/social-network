const router = require('express').Router()
const userRouter = require('./userRouter')
const authRouter = require('./authRouter')

router.use('/auth', authRouter)
router.use('/users', userRouter)

module.exports = router
