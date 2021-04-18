const { errorCodesEnum } = require('../constant')
const ErrorHandler = require('../error/ErrorHandler')
const { BAD_REQUEST, RECORD_NOT_FOUND } = require('../error/error.messages')
const { userValidators } = require('../validators')
const User = require('../dataBase/models/User')
const { ID_MOT_VALID } = require('../error/error.messages')

module.exports = {
  checkIsIdValid: (req, res, next) => {
    try {
      const { userId } = req.params

      if (userId.length < 24) {
        throw new ErrorHandler(
          errorCodesEnum.BAD_REQUEST,
          ID_MOT_VALID.customCode
        )
      }
      next()
    } catch (e) {
      next(e)
    }
  },
  isUserValid: (req, res, next) => {
    try {
      const { error } = userValidators.createUserValidator.validate(req.body)

      if (error) {
        throw new ErrorHandler(
          errorCodesEnum.BAD_REQUEST,
          BAD_REQUEST.customCode,
          error.details[0].message
        )
      }
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
          errorCodesEnum.NOT_FOUND,
          RECORD_NOT_FOUND.customCode
        )
      }
      req.user = user

      next()
    } catch (e) {
      next(e)
    }
  },
}
