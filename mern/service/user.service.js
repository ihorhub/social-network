const User = require('../dataBase/models/User')
const POST = require('../dataBase/models/Post')
const Friend = require('../dataBase/models/Friend')
module.exports = {
  findUsers: (filterObject) => User.find(filterObject),
  findFriends: (filterObject) => Friend.find(filterObject),

  findUserById: (userID) => User.findById(userID),

  createFriend: (userObject) => Friend.create(userObject),
  createUser: (userObject) => User.create(userObject),
  updateUser: (userId, body) => User.findOneAndUpdate(userId, body),
  updateUserById: (userId, updateObject) =>
    User.findOneAndUpdate(
      { _id: userId },
      { $set: updateObject },
      { multi: 1 }
    ),

  deleteUser: (userId) => User.findByIdAndDelete({ _Id: userId }),
  deleteFriend: (userId) => Friend.findByIdAndDelete({ _Id: userId }),
}
