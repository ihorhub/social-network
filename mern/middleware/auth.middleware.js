const jwt = require('jsonwebtoken')
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require('../configs/config')
const { constants } = require('../constant')
const ErrorHandler = require('../error/errorHandler')
const {
  NOT_VALID_TOKEN,
  PERMISSION_DENIED,
} = require('../error/error.messages')
const { authService } = require('../service')

module.exports = {
  checkAccessTokenMiddleware: async (req, res, next) => {
    console.log(req.body)
    try {
      const access_token = req.get(constants.AUTHORIZATION)

      if (!access_token) {
        throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code)
      }

      jwt.verify(access_token, JWT_ACCESS_SECRET, (err) => {
        if (err) {
          throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code)
        }
      })

      const tokens = await authService
        .findByParams({ access_token })
        .populate('_user_id')

      if (!tokens) {
        throw new ErrorHandler(
          PERMISSION_DENIED.message,
          PERMISSION_DENIED.code
        )
      }

      req.user = tokens._user_id
      console.log(req.body)

      next()
    } catch (e) {
      next(e)
    }
  },

  checkRefreshTokenMiddleware: async (req, res, next) => {
    try {
      const refresh_token = req.get(constants.AUTHORIZATION)

      if (!refresh_token) {
        throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code)
      }

      jwt.verify(refresh_token, JWT_REFRESH_SECRET, (err) => {
        if (err) {
          throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code)
        }
      })

      const tokens = await authService.findByParams({ refresh_token })

      if (!tokens) {
        throw new ErrorHandler(
          PERMISSION_DENIED.message,
          PERMISSION_DENIED.code
        )
      }

      req.tokenInfo = tokens
      next()
    } catch (e) {
      next(e)
    }
  },
}
