const User=require('../models/userModel')

// const loginUser=async (req,res)=>{
//     res.json({mssg:"login User"})
// }

const signupUser=async(req,res)=>{
    const {name,email,mobile}=req.body.user
    console.log(req.body)
    try{
        console.log(name, email, mobile);
        console.log('user Controller');
        const user=await User.signup(name, email, mobile)
        res.status(200).json({name,email,mobile, "token": user.token})
    }
    catch (error){
        res.status(400).json({error:error.message})
        console.log(error)
    }
  
}
module.exports={signupUser}