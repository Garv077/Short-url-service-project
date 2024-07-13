import express from "express";
import staticRouter from "./Routes/staticRoutes.js"
import userRouter from "./Routes/user.js";
import urlRouter from "./Routes/url.js";
import {handleDbConnection} from "./dbConnection.js"
import {handleRestrictUserLogin,checkAuth} from "./middlewares/auth.js"
import cookieParser from "cookie-parser";
import path from "path";
const dbUrl="mongodb://localhost:27017/new-url-shortner-stateless"
const port = 8000;
const app = express();


// Database Connection
handleDbConnection(dbUrl)

//View Engine 
app.set("view engine","ejs")
app.set("Views",path.resolve("./Views"))

// middleWares 
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

//Routes
//static routes
app.use("/",checkAuth,staticRouter)
app.use("/user",staticRouter)

//user routes
app.use("/user",userRouter)
 
//url routes
app.use("/url",handleRestrictUserLogin,urlRouter)


app.listen(port,()=>{console.log(`server started at http://localhost:${port}`)})






