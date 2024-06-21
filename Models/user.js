import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    username:{
        type:String,
        required:true,
    },
    email:{
    required:true,
    unique:true,
    type:String,
    },
    password:{
        required:true,
        type:String
    }

},
{timestamps:true}) 

const User = mongoose.model("User",userSchema)

export default  User;