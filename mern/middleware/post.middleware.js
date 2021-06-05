const ErrorHandler = require('../error/ErrorHandler')
const {
  NOT_VALID_BODY,
  NOT_VALID_ID,
  PERMISSION_DENIED,
} = require('../error/error.messages')
const { postValidator } = require('../validators')
const Post = require('../dataBase/models/Post')
const { postService } = require('../service')

module.exports = {
  isPostValid: (req, res, next) => { 
    try {
      const { error } = postValidator.createPostValidator.validate(req.body)

      if (error){throw new ErrorHandler(error.details[0].message, NOT_VALID_BODY.code)}
        
      req.user = posts.user_id
   
      next()
    } catch (e) {
      next(e)
    }
  },

  checkPostMiddleware: async (req, res, next) => {
    try {
      const posts = await postService.populate('user_id')

      if (!posts) {
        throw new ErrorHandler(
          PERMISSION_DENIED.message,
          PERMISSION_DENIED.code
        )
      }
      req.user = posts.user_id
      next()
    } catch (e) {
      next(e)
    }
  },
}
