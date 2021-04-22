const Joi = require('Joi')
const { constants, regexpEnum } = require('../../constant')
module.exports = Joi.object({
  name: Joi.string().alphanum().min(2).max(50).required(),
  surname: Joi.string().min(2).max(50).required(),
  age: Joi.number()
    .min(constants.CURRENT_YEAR - 110)
    .max(constants.CURRENT_YEAR),
  email: Joi.string().regex(regexpEnum.EMAIL_REGEXP).required(),
  password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).required(),
})
