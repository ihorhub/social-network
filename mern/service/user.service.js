const User = require('../dataBase/models/User')
module.exports = {
  findUsers: (filterObject) => User.find(filterObject),

  findUserById: (userID) => User.findById(userID),

  createUser: (userObject) => User.create(userObject),

  updateUserById: (userId, updateObject) =>
    User.findOneAndUpdate(
      { _id: userId },
      { $set: updateObject },
      { multi: 1 }
    ),
  //  ({_id:ObjectId("6081ecbe968a143ce43c7ae9")},{$set:{'post':'waiter'}},
  //   {multi:1} )
  deleteUser: (userId) => User.findByIdAndDelete({ _Id: userId }),
}
