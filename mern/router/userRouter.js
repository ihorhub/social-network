const router = require('express').Router()

const userController = require('../controller/user.controller')
const {
  authMiddleware,
  userMiddleware,
  fileMiddleware,
  postMiddleware,
} = require('../middleware')

router.get('/all', userController.getAllUsers)

router.post(
  '/register',
  fileMiddleware.checkFile,
  fileMiddleware.checkAvatar,
  // userMiddleware.isUserValid,
  // userMiddleware.checkIsUserRegister,
  userController.createUser
)
router.post(
  '/post',
  // userMiddleware.checkIsIdValid,
  postMiddleware.isPostValid,
  postMiddleware.checkPostMiddleware,
  authMiddleware.checkAccessTokenMiddleware,
  userController.createPost
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
