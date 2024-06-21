import jwt from "jsonwebtoken"
const secretKey = "axkjd128j"
async function handleRestrictUserLogin(req,res,next){
const uid = req.cookies.uid;
if(!uid){res.redirect("/login")}
if(uid){
const user = jwt.verify(uid,secretKey)
if(!user){ res.redirect('/login')}
if(user){
    req.user = user;
    next()}
}
}
export{
    handleRestrictUserLogin
}
    