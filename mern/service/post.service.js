const Post = require('../dataBase/models/Post')

const createPostRecord = async (userId, post) => {
  await Post.create({ user_id: userId, ...post })
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
