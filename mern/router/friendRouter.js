const router = require('express').Router()
const userController = require('../controller/user.controller')
const  friendController= require('../controller/friend.controller')
const { authMiddleware, userMiddleware } = require('../middleware')

router.get(
    '/allFriend', 
    friendController.getAllFriends
  )
  router.get(
    '/:userId',
    userMiddleware.checkIsIdValid,
    friendController.getSingleFriend
  )
  router.post(
    '/addFriend',
    userMiddleware.checkIsIdValid,
    friendController.addFriend
  )
  router.delete(
    '/delete/:userId',
    userMiddleware.checkIsIdValid,
    friendController.deleteFriend
  )

module.exports = router