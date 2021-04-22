const { passwordHasher, tokenizer } = require('../helpers')
const { errorCodesEnum, logAction } = require('../constant')
const { authService } = require('../service')

module.exports = {
  authUser: async (req, res, next) => {
    try {
      const {
        body: { password },
        user,
      } = req
      console.log(req.body)
      await passwordHasher.compare(password, user.password)

      const tokens = await authService.createRecord(user._id)

      res.status(errorCodesEnum.OK, logAction.USER_LOGGED_IN).json(tokens)
    } catch (e) {
      next(e)
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const { _user_id, _id } = req.tokenInfo
      console.log(req.tokenInfo)
      const tokens = tokenizer()

      await authService.updateById(_id, { ...tokens, _user_id })

      res.json(tokens)
    } catch (e) {
      next(e)
    }
  },
}
