import mongoose, { Schema } from "mongoose"
import User from "./user.js"
const urlSchema = new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true,
    },
    shortId:{
     type:String,
      required:true,
      unique:true,  
    },
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",

       
    }
},
{timestamps:true}
)

const Url = mongoose.model("Url",urlSchema)

export default Url;