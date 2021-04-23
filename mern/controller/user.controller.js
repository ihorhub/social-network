const { errorCodesEnum, logAction, emailActionsEnum } = require('../constant')
const { WELCOME } = require('../constant/emailActions.enum')
const ErrorHandler = require('../error/errorHandler')
const { PERMISSION_DENIED } = require('../error/error.messages')
const {
  userService,
  emailService,
  fileService,
  postService,
} = require('../service')
const { passwordHasher } = require('../helpers')

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.findUsers(req.query)

      res.json(users)
    } catch (e) {
      next(e)
    }
  },

  getSingleUser: async (req, res, next) => {
    try {
      const { userId } = req.params

      const user = await userService.findUserById(userId)

      res.json(user)
    } catch (e) {
      next(e)
    }
  },

  createUser: async (req, res, next) => {
    try {
      const {
        body: { password, email },
        avatar,
      } = req

      const hasPassword = await passwordHasher.hash(password)

      const user = await userService.createUser({
        ...req.body,
        password: hasPassword,
      })
      // await user.save()
      if (avatar) {
        const uploadPath = fileService.dirBuilder(
          avatar.name,
          'photos',
          user._id
        )

        await userService.updateUserById(user._id, { avatar: uploadPath })
      }

      await emailService.sendMail(email, WELCOME, {
        userName: email,
      })
      res.status(errorCodesEnum.OK).json(logAction.USER_CREATED)
    } catch (e) {
      next(e)
    }
  },

  updateUsers: async (req, res, next) => {
    try {
      const { userId } = req.params
      const { post } = req.body
      console.log(req.body)
      console.log(userId)
      await userService.updateUserById(post, userId)

      res.status(errorCodesEnum.OK).json(logAction.USER_UPDATED)
    } catch (e) {
      next(e)
    }
  },

  createPost: async (req, res, next) => {
    try {
      const { userId } = req.params
      const {
        body: { post },
        user,
      } = req

      console.log(post)
      console.log(userId)
      await postService.createPostRecord(user._id)

      res.status(errorCodesEnum.OK).json(logAction.USER_UPDATED)
    } catch (e) {
      next(e)
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const { userId } = req.params

      if (userId !== req.user.id) {
        throw new ErrorHandler(
          PERMISSION_DENIED.message,
          PERMISSION_DENIED.code
        )
      }
      const user = await userService.findUserById(userId)

      await mailService.sendMail(user.email, emailActions.GOODBYE, {
        userName: user.name,
      })
      userService.deleteUser(userId)

      res.status(errorCodesEnum.DELETE).json(logAction.USER_DELETED)
    } catch (e) {
      next(e)
    }
  },
}
