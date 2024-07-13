import jwt from "jsonwebtoken";
import User from "../Models/user.js";
import Url from "../Models/ulr.js"; 
const secretKey = "axkjd128j";

async function handleRestrictUserLogin(req, res, next) {
  const uid = req.cookies?.uid;
  if (!uid) {
    res.redirect("/login");
  }
  if (uid) {
    const user = jwt.verify(uid, secretKey);
    if (!user) {
      res.redirect("/login");
    }
    if (user) {
      req.user = user;
      next();
    }
  }
}

async function checkAuth(req,res,next){
    const uid = req.cookies?.uid;
    if(uid){
        const user = jwt.verify(uid, secretKey);
        const {email}= user; 
        const data = await User.findOne({email})
        const urls = await Url.find({createdby:data._id})
        req.urls= urls;
        next()
        console.log("yes",urls)
    }
    if(!uid){
        console.log("no uid")
        next()
    }
}
export { 
    handleRestrictUserLogin,
    checkAuth
 };
