const User = require('../dataBase/users)
module.exports ={
findUsers:(filterObject)=>User.find(filterObject),
findUserById: (userID) => User.findById(userID),
createUser: (userObject) => User.create(userObject)
}