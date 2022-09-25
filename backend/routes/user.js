const {loginUser,signupUser}=require("../controllers/userController")
const express = require('express')
const router=express.Router()

//Login Router
// router.post('/login',loginUser)

//Sign up Router
router.post('/signup',signupUser)

module.exports=router