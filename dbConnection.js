import mongoose from "mongoose";

function handleDbConnection(dbUrl){
mongoose.connect(dbUrl)
.then(()=>{console.log("db connected")})
.catch(()=>{console.log("Error in conneting db")})
}



export {
    handleDbConnection
}