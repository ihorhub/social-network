const Post = require('../dataBase/models/Post')

const createPostRecord = async (userId) => {
  await Post.create({ user_id: userId })
}
const updatePostById = async (userId, updateObject) =>
  await User.findOneAndUpdate(
    { _id: userId },
    { $set: updateObject },
    { multi: 1 }
  )
module.exports = {
  createPostRecord,
  updatePostById,
}
