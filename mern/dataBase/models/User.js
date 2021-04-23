const { Schema, model } = require('mongoose')
const {
  dataBaseTablesEnum: { USER },
} = require('../../constant')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: String },
    email: { type: String, required: true },
    password: { type: String, select: false },
    avatar: { type: String },
    post: { type: String },
  },
  { timestamps: true }
)

module.exports = model(USER, userSchema)
// toObject: { virtuals: true }, toJSON: { virtuals: true }
