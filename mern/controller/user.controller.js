const { errorCodesEnum, logAction } = require('../constant')

const ErrorHandler = require('../error/errorHandler')
const { userService, emailService, fileService } = require('../service')
const { passwordHasher } = require('../helpers')
const { emailActionsEnum } = require('../constant')

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
      await user.save()
      if (avatar) {
        const uploadPath = fileService.dirBuilder(
          avatar.name,
          'photos',
          user._id
        )

        await userService.updateUserById(user._id, { avatar: uploadPath })
      }

      await emailService.sendMail(email, emailActionsEnum.WELCOME, {
        userName: email,
      })
      res.status(errorCodesEnum.CREATED).json(logAction.USER_CREATED)
    } catch (e) {
      next(e)
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const { userId } = req.params

      if (userId !== req.user.id) {
        throw new ErrorHandler(errorCodesEnum.UNAUTHORIZED)
      }
      const user = await userService.findUserById(userId)

      await mailService.sendMail(user.email, emailActions.GOODBYE, {
        userName: user.name,
      })
      userService.deleteUser(userId)

      res.json(`${userId}${logAction.USER_DELETED}`)
    } catch (e) {
      next(e)
    }
  },
}
