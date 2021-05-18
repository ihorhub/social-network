const { Schema, model } = require('mongoose')
const {
    dataBaseTablesEnum: { FRIEND,USER },
  } = require('../../constant')

  const friendSchema=new Schema({
    name:{type:String},
    age:{type:String},
    avatar:{type:String},
    user_id: { type: Schema.Types.ObjectId, ref: USER },

  },{ timestamps: true })
  module.exports = model(FRIEND, friendSchema)