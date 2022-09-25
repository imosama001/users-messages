const express=require("express");
const mongoose=require("mongoose");
const MONGO_URI=`mongodb+srv://osama:asdf1234@cluster0.jvgde.mongodb.net/arnowaUsers?retryWrites=true&w=majority`
const PORT =4000
const messageRoutes=require("./routes/messages")
const userRoutes=require("./routes/user")
const app=express()
const cors=require("cors")


app.use(cors())

//middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//Routes
app.use('/api/messages',messageRoutes)
messageRoutes.get('/')

app.use('/api/user',userRoutes)

// app.get("/api/home",(req,res)=>{
//     res.json({mssg:"welcome to home route"})
// })

// app.get("/login",(req,res)=>{
//     res.json({mssg:"welcome to login"})
// })

// app.listen(port,()=>
// console.log("listening on port "+ port))

mongoose.connect(MONGO_URI,{useNewUrlParser: true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log('Connected to DB and listening on port '+PORT);
    })
})

.catch((error)=>{
    console.log(error);
})
