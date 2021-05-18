const { friendService } = require('../service')
const {createFriend,deleteFriend,findFriend,findFriendById}=require('../service/friend.service')
const { errorCodesEnum, logAction} = require('../constant')

module.exports={
    getAllFriends:async(req,res,next)=>{try{
        const friends = await friendService.findFriend(req.params); res.json(friends)}catch(e){next(e)}},
    getSingleFriend:async(req,res,next)=>{try{
        const {userId}=req.params
        const friend =await friendService.findFriendById(userId)
        res.json(friend)
    }catch(e){next(e)}},
    addFriend:async(req,res,next)=>{try{
        const {userId}=req.params
        await friendService.createFriend(userId)
        res.status(errorCodesEnum.OK).json(logAction.FRIEND_ADD)
    }catch(e){next(e)}},
    deleteFriend:async(req,res,next)=>{try{
        const{userId}=req.params
        await friendService.deleteFriend(userId)
        res.status(errorCodesEnum.DELETE).json((logAction.FRIEND_DELETED))
    }catch(e){next(e)}}

}