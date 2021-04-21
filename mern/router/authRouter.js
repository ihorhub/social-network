const router = require('express').Router()

const { authController } = require('../controller')
const { authMiddleware, userMiddleware } = require('../middleware')

router.post(
  '/login',
  userMiddleware.checkIsUserPresent,
  authController.authUser
)
router.post(
  '/refresh',
  authMiddleware.checkRefreshTokenMiddleware,
  authController.refreshToken
)

module.exports = router
