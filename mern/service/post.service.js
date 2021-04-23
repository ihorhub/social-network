const Post = require('../dataBase/models/Post')

const createPostRecord = async (userId) => {
  await Post.create({ user_id: userId })
}
const updatePostById = (userId, updateObject) =>
  Post.findByIdAndUpdate({ _id: userId }, { $set: updateObject })

module.exports = {
  createPostRecord,
  updatePostById,
}
