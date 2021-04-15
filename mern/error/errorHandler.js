module.exports = class ErrorHandler extends Error {
  constructor(message, status) {
    super(message)
    this.state = status
    Error.captureStackTrace(this, this.constructor)
  }
}
