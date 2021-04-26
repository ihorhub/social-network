const { Schema, model, Mongoose } = require('mongoose')
const {
  dataBaseTablesEnum: { USER, POST },
} = require('../../constant')
const { populate } = require('./O_Auth')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: String },
    email: { type: String, required: true },
    password: { type: String, select: false },
    avatar: { type: String },
    // note: [{ type: Schema.Types.Mixed }]
    notes: [{ type: Schema.Types.ObjectId, ref: POST }],
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
)

userSchema.virtual('userData', {
  ref: POST,
  localField: 'notes',
  foreignField: 'post',
})

userSchema.pre('find', function () {
  console.log('PRE FIND HOOK')
  this.populate('userData')
})
module.exports = model(USER, userSchema)
