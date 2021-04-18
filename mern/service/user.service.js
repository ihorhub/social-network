const User = require('../dataBase/models/User')
module.exports = {
  findUsers: (filterObject) => User.find(filterObject),

  findUserById: (userID) => User.findById(userID),

  createUser: (userObject) => User.create(userObject),

  updateUserById: (userId, updateObject) =>
    User.updateOne({ _id: userId }, { $set: updateObject }),

  deleteUser: (userId) => User.findByIdAndDelete(userId),
}
