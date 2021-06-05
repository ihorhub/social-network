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
  userMiddleware.isUserValid,
  userMiddleware.checkIsUserRegister,
  userController.createUser
)
// router.post('/post', (req, res, next) => {
//   const data = req.body

//   console.log(data)
//   res.data
//   next()
// }),
router.post(
  '/post',
  authMiddleware.checkAccessTokenMiddleware,
  // postMiddleware.isPostValid,
  // postMiddleware.checkPostMiddleware,
  userController.createPost
)

router.post(
  '/upload',
  fileMiddleware.checkFile,
  fileMiddleware.checkAvatar,
  // authMiddleware.checkAccessTokenMiddleware,
  userController.createFile
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
