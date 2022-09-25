const mongoose=require('mongoose')
const jwt = require('jsonwebtoken');
const { options } = require('../routes/messages');

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        
    },
    
},{timestamps:true})

userSchema.statics.signup=async function(name,email,mobile){
    console.log('sign up function started %%%%%%', name, email, mobile);
    // const exists=await this.findOne({email})
    // if(exists){
    //     throw Error("Email already exists")
    // }
    // const salt =await bcrypt.genSalt(10)
    // const hash=await bcrypt.hash(password,salt)

    const data = {name,email,mobile};
    console.log(data);
    const jwtToken = jwt.sign(data, "thisissuperseceretekey", {expiresIn: 60 * 5});

    console.log(jwtToken);
    try{

        const user=await this.create(data);
        console.log('after create %%%%%%');
        user.token = jwtToken;
        return user;
    }catch(error){
        console.log(error)
        throw("error while creating user"+error.message)
    }
    
}

module.exports=mongoose.model('User',userSchema)