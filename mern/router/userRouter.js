const router = require('express').Router()

const userController = require('../controller/user.controller')
const {
  authMiddleware,
  userMiddleware,
  fileMiddleware,
} = require('../middleware')

router.get('/', userController.getAllUsers)

router.post(
  '/',
  fileMiddleware.checkFile,
  fileMiddleware.checkAvatar,
  userMiddleware.isUserValid,
  userController.createUser
)

router.use('/:userId', userMiddleware.checkIsIdValid)
router.get('/:userId', userController.getSingleUser)
router.delete(
  '/:userId',
  authMiddleware.checkAccessTokenMiddleware,
  userController.deleteUser
)

module.exports = router
