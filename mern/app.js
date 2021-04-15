const express = require('express')
const mongoose = require('mongoose')
const dotenv= require('dotenv')
const path = require('path')

const apiRouter = require('./router/apiRouter')
const app = express()
dotenv.config()
_connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all('/', apiRouter)

app.listen(5000, () => {
  console.log('app listen 5000')
})
function_connectDB(){
  mongoose.connect('mongoDB://localhost:27017',{useNewUrlParser:true, useUnifieldTopology:true})
  const connection =mongoose.connection
  connection.on('error',(error)=>{
    console.log(error)
  })
}