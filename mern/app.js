const express = require('express';)
const path = require('path');
const fileUpload =require('express-fileupload');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// dotenvConfigOutput.config();

const { MONGO_URL, PORT } = require('./configs/config')
const apiRouter = require('./router/apiRouter')

const app = express();
_connectDB();
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
  res.status(err.status || 500).json({
    customCode: err.customCode || 0,
    message: err.message || '',
  })
})

app.listen(PORT, () => {
  console.log(`App listen ${PORT}`)
})

function _connectDB() {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const { connection } = mongoose

  connection.on('error', (error) => {
    console.log(error)
  })
}
