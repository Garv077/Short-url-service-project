
import User from "../Models/user.js";
import jwt from "jsonwebtoken"
const secretKey = "axkjd128j"

async function handleUserSignIn(req,res){
  try {
    const {username,email,password} = req.body;
      if(!username || !email || !password)return res.end("Invalid data")
      await User.create({
        username:username,
        email:email,
        password:password,
      })  
      const user = await User.findOne({email,password})
      const token = jwt.sign(
        {"name":user.username,
       "email":user.email
      },secretKey)
     
      res.cookie('uid',token)
      res.render("home",{user:user})
  } catch (error) {
    if(error){return res.end(`<h1>${error}</h1>`)}
  }
                              
    }
async function handleUserLogin(req,res){
  const {email,password} = req.body;
  const user = await User.findOne({email,password})
  if(!user) return res.redirect("/signup")
  if(user){
      const token = jwt.sign(
        {"name":user.username,
       "email":user.email
      },secretKey)
      
   
      res.cookie('uid',token)
      res.redirect("/");
    }

  


}



export {
    handleUserSignIn,
    handleUserLogin
}