const { errorCodesEnum } = require('../constant')
const { errorMessage } = require('../constant')
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
  isUserValid: (req, res, next) => {
    try {
      const { name, password, prefer = 'en' } = req.body
      if (!name || !password) {
        throw new Error('some fild is empty')
      }
      if (password.length < 6) {
        throw new Error(errorMessage.TO_WEAK_PASSWORD[prefer])
      }
      next()
    } catch (e) {
      res.status(400).json(e.message)
    }
  },
}
