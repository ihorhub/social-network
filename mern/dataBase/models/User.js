const { Schema, model } = require('mongoose')
const {
  dataBaseTablesEnum: { USER },
} = require('../../constant')
const noteSubSchema = {
  notes: { type: String, minlength: 1 },
}
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, default: 16 },
    email: { type: String, require: true },
    password: { type: String },
    note: [noteSubSchema],
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
)

module.exports = model(USER, userSchema)
