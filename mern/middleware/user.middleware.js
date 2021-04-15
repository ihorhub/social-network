const { errorCodesEnum } = require('../constant')
const { errorMessage } = require('../constant')
const { userValidator } = require('../validators')
module.exports = {
  checkIsValidId: (req, res, next) => {
    try {
      const userId = +req.params.userId
      if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
        throw new Error('not valid id')
      }
      next()
    } catch (e) {
      res.status(400).json(e.message)
    }
  },

  joiUserValid: (req, res, next) => {
    try {
      const { error } = joiUserValidator.validate(req.body)

      if (error) {
        throw new ErrorHandler(
          error.details[0].message,
          errorCodesEnum.BAD_REQUEST
        )
      }

      next()
    } catch (e) {
      next(e)
    }
  },
  // isUserValid: (req, res, next) => {
  //   try {
  //     const { name, password, prefer = 'en' } = req.body
  //     if (!name || !password) {
  //       throw new Error('some fild is empty')
  //     }
  //     if (password.length < 6) {
  //       throw new Error(errorMessage.TO_WEAK_PASSWORD[prefer])
  //     }
  //     next()
  //   } catch (e) {
  //     res.status(400).json(e.message)
  //   }
  // },
}
