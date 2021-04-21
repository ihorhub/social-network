const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const { MONGO_URL, PORT } = require('./configs/config')
const dotenv = require('dotenv')

dotenv.config()
// dotenvConfigOutput.config();

const apiRouter = require('./router/apiRouter')

const app = express()
_connectDB()
app.use(fileUpload())
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.cwd(), 'static')))

app.use('/', apiRouter)

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
  res.status(err.status || 500).json({
    customCode: err.customCode || 0,
    message: err.message || '',
  })
})

app.listen(PORT || 5000, () => {
  console.log(`App listen ${PORT}`)
})

function _connectDB() {
  mongoose.connect(encodeURI(MONGO_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const { connection } = mongoose

  connection.on('error', (error) => {
    console.log(error)
  })
}
