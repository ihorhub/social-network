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
const USER = require('../dataBase/models/User')

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.findUsers(req.params)
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
        docs,
      } = req

      const hasPassword = await passwordHasher.hash(password)

      const user = await userService.createUser({
        ...req.body,
        password: hasPassword,
      })
      // await user.save()

      await emailService.sendMail(email, WELCOME, {
        userName: email,
      })
      res.status(errorCodesEnum.OK).json(logAction.USER_CREATED)
    } catch (e) {
      next(e)
    }
  },
  createFile: async (req, res, next) => {
    try {
      const {
        body: { avatar, docs },
      } = req
      if (avatar) {
        const uploadPath = fileService.dirBuilder(
          avatar,
          avatar.name,
          'photos',
          'user',
          user._id
        )
        await userService.updateUser(user._id, { avatar: uploadPath })
      }
    } catch (e) {
      next(e)
    }
  },
  updateUsers: async (req, res, next) => {
    try {
      const userId = req.user
      const post = req.body

      // console.log(user)

      await userService.updateUserById(userId, post)

      res.status(errorCodesEnum.OK).json(post, logAction.USER_UPDATED)
    } catch (e) {
      next(e)
    }
  },

  createPost: async (req, res, next) => {
    try {
      const userId = req.user
      const post = req.body
      console.log(req.body)
      await postService.createPostRecord(userId, post)

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
