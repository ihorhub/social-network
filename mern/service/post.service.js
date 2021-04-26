const Post = require('../dataBase/models/Post')
const User = require('../dataBase/models/User')

const createPostRecord = async (userId, post) => {
  await Post.create({ user_id: userId, ...post })
}
const updatePostById = async (userId, updateObject) => {
  await User.findOneAndUpdate(
    { _id: userId },
    { $set: updateObject },
    { multi: 1 }
  )
}

const updateUserByPost = async (userId, updateObject) => {
  await User.updateOne(
    { _id: userId },
    {
      $addToSet: updateObject,
    },
    { upsert: true }
  )
}

module.exports = {
  createPostRecord,
  updatePostById,
  updateUserByPost,
}
