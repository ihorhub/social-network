module.exports = {
  EMAIL_REGEXP: new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/),
  PASSWORD_REGEXP: new RegExp(/^[A-Za-z0-9]\w{8,}$/),
}

// /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
