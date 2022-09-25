const express=require('express')
const router=express.Router()
const {getMessages,createMessage} =require('../controllers/messageController')
//Get all workouts
router.get('/',getMessages)


//Post a new message
router.post('/',createMessage)

module.exports =router;
