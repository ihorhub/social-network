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
router.post('/users/post', (req, res, next) => {
  const post = req.body

  console.log(post)
  next()
}),
  // router.post(
  //   '/post',
  //   // userMiddleware.checkIsIdValid,
  //   postMiddleware.isPostValid,
  //   postMiddleware.checkPostMiddleware,
  //   // authMiddleware.checkAccessTokenMiddleware,
  //   userController.updateUsers
  // )

  router.post(
    '/upload',

    fileMiddleware.checkFile,
    fileMiddleware.checkAvatar,
    // authMiddleware.checkAccessTokenMiddleware,
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
