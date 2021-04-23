const { Schema, model } = require('mongoose')

const {
  dataBaseTablesEnum: { POST, USER },
} = require('../../constant')

const postSchema = new Schema(
  {
    post: { type: String },
    comment: { type: String },
    user_id: { type: Schema.Types.ObjectId, ref: USER },
  },
  { timestamps: true }
)

module.exports = model(POST, postSchema)
