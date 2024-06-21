import {handleGenerateUrl,handleGetShortUrl} from "../Controllers/url.js"
import express from "express";
const router = express.Router();

router.get("/:shortId",handleGetShortUrl)
router.post("/",handleGenerateUrl);

 export default router;

