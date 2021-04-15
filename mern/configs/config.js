module.exports = {
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/mongo_hw',
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'SECRET_ACCESS',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'SECRET_REFRESH',
  PORT: 5000,

  DB_USER: process.env.DB_USER || 'user',
  DB_PASSWORD: process.env.DB_PASSWORD || 'user',

  ROOT_EMAIL: process.env.ROOT_EMAIL || 'testMail@gmail',
  ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || 'Qwerty123456!',
  ROOT_EMAIL_SERVICE: process.env.ROOT_EMAIL_SERVICE || 'gmail',
  SENTRY_DSN: process.env.SENTRY_DSN || '',
}
