const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require('dotenv')

const helmet=require('helmet')

const authRoute=require("./controllers/auth.controller")
const otpRoute=require("./controllers/otpAuth.controller")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, (err)=>{
    if(err){
        console.log(err)
    }else
        console.log("Connected to MongoDB")

})

//middleware

app.use(express.json())
app.use(helmet())



app.use("/api/authusers",authRoute)

app.use('/api/otps',otpRoute)



app.listen(8000,()=>{
    console.log("server is running")
})