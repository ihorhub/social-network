const { Schema, model } = require('mongoose')
const {
  dataBaseTablesEnum: { USER },
} = require('../../constant')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, default: 16 },
    email: { type: String, require: true },
    password: { type: String, select: false },
    avatar: { type: String },
    notes: { type: String, minlength: 1 },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
)

module.exports = model(USER, userSchema)
