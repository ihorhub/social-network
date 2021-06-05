const User = require('../dataBase/models/User')
const POST = require('../dataBase/models/Post')
const Friend = require('../dataBase/models/Friend')
module.exports = {  
  findFriend: (filterObject) => Friend.find(filterObject),
  findFriendById: (userID) => Friend.findById(userID),
  createFriend: (userObject) => Friend.create(userObject),  
  deleteFriend: (userId) => Friend.findByIdAndDelete({ _Id: userId }),
}
