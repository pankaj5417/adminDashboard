const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:50,
       
    },
    mobile:{
        type:String,
        required:true,
        length:10
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },

    password:{
        type:String,
        required:true,
        min:6
    },
   confirmPassword:{
       type:String,
       min:6
   },
   referralCode:{
       type:String,
       required:false,
   },
   resetToken:{
       data:String,
       default:""
   }
    
   
   


},
{
    timestamps:true
}
)

module.exports=mongoose.model("authusers",userSchema)