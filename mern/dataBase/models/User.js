const { Schema, model } = require('mongoose')
const arrSubSchema = {
  post: { type: string },
}
const userSchema = new Schema({
  name: { type: string, required: true },
  age: { type: Number, default: 15 },
  arr: [arrSubSchema], {timestamps:true, toObject:{virtuals:true},toJSON:{virtuals:true}}   
  userSchema.virtual('full_name').get(function(){
    return `${this.name}${this.age}`
  })
    
})
module.exports = model('User', userSchema)
