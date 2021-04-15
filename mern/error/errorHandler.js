module.exports = class ErrorHandler extends Error {
  constructor(status, customCode, message = '') {
    super(message)
    this.state = status
    this.customCode = customCode //4001//4002
    Error.captureStackTrace(this, this.constructor)
  }
}
