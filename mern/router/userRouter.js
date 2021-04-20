const router = require('express').Router()

const userController = require('../controller/user.controller')
const {
  authMiddleware,
  userMiddleware,
  fileMiddleware,
} = require('../middleware')

router.get('/', userController.getAllUsers)

router.post(
  '/register',
  fileMiddleware.checkFile,
  fileMiddleware.checkAvatar,
  userMiddleware.isUserValid,
  userController.createUser
)

router.get(
  '/:userId',
  userMiddleware.checkIsIdValid,
  userController.getSingleUser
)
router.delete(
  '/delete/:userId',
  userMiddleware.checkIsIdValid,
  authMiddleware.checkAccessTokenMiddleware,
  userController.deleteUser
)

module.exports = router
