const Message=require('../models/messageModel')
const mongoose=require('mongoose')
//get all the workouts

const getMessages=async(req,res)=>{
    const messages=await Message.find({}).sort({createdAt:-1})
    res.status(200).json(messages)
}

//get a single message
// const getMessage=async(req,res)=>{
//     const {id}=req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error:"No such workout invalid id"})
//     }
//     const workout=await Workout.findById(id)
//     if(!workout){
//         return res.status(404).json({error:"no such workout"})
//     }
//     res.status(200).json(workout)
// }

//create a new Message
const createMessage=async(req,res)=>{ 
    const {message}=req.body
  
//add doc to db
try{
    const message=await Workout.create({message})
    res.status(200).json(message)
} catch (error){
    res.status(400).json({error:error.message})
}
}


module.exports= {
    createMessage,
    getMessages
}