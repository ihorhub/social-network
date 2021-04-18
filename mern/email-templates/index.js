const { emailActionsEnum } = require('../constant')

module.exports = {
  [emailActionsEnum.WELCOME]: {
    templateName: 'welcome',
    subject: 'Welcome on board',
  },

  [emailActionsEnum.GOODBYE]: {
    templateName: 'user-blocked',
    subject: 'Your account was blocked',
  },

  [emailActionsEnum.PASSWORD_CHANGED]: {
    templateName: 'zzz',
    subject: 'Password was changed',
  },
}
