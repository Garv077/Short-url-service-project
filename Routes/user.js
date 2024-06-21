import User from "../Models/user.js"
import express from "express"
import {handleUserSignIn, handleUserLogin} from "../Controllers/user.js"
const router = express.Router();

router
.post("/signup",handleUserSignIn )
.post("/login",handleUserLogin )

export default  router;