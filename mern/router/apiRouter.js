const router = require('express').Router()
const userRouter = require('./userRouter')
const authRouter = require('./authRouter')
const friendRouter = require('./friendRouter')

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/friends', friendRouter)

module.exports = router
