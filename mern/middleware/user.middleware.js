const ErrorHandler = require('../error/ErrorHandler')
const {
  NOT_VALID_BODY,
  WRONG_EMAIL_OR_PASS,
  NOT_VALID_ID,
  PERMISSION_DENIED,
} = require('../error/error.messages')
const { userValidator } = require('../validators')
const User = require('../dataBase/models/User')

module.exports = {
  checkIsIdValid: (req, res, next) => {
    try {
      const { userId } = req.params

      if (userId.length < 24) {
        throw new ErrorHandler(NOT_VALID_ID.message, NOT_VALID_ID.code)
      }
      next()
    } catch (e) {
      next(e)
    }
  },

  isUserValid: (req, res, next) => {
    try {
      const { error } = userValidator.createUserValidator.validate(req.body)

      if (error)
        throw new ErrorHandler(error.details[0].message, NOT_VALID_BODY.code)

      next()
    } catch (e) {
      next(e)
    }
  },
  checkIsUserPresent: async (req, res, next) => {
    try {
      const { email } = req.body

      const user = await User.findOne({ email }).select('+password')

      if (!user) {
        throw new ErrorHandler(
          PERMISSION_DENIED.message,
          PERMISSION_DENIED.code
        )
      }
      req.user = user

      next()
    } catch (e) {
      console.log(e)
      next(e)
    }
  },
  checkIsUserRegister: async (req, res, next) => {
    try {
      const { email } = req.body

      const user = await User.findOne({ email }).select('+password')

      if (user) {
        throw new ErrorHandler(
          WRONG_EMAIL_OR_PASS.message,
          WRONG_EMAIL_OR_PASS.code
        )
      }
      req.user = user

      next()
    } catch (e) {
      next(e)
    }
  },
}
