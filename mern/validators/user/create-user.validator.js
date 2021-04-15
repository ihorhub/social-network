const Joi = require('Joi')
const { constants,regexpEnum } = require('../../constant')
module.exports = Joi.object({
  name: Joi.string().alphanum().min(2).max(50).required(),allow('admin')
  age:Joi.number().integer().min(constants.CURRENT_YEAR-110).max(constants.CURRENT_YEAR)
  email: Joi.string().regex(regexpEnum.EMAIL_REGEXP).require(),
  password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).require(),
})
