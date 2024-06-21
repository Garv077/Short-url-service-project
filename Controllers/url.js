
import User from "../Models/user.js"
import Url from "../Models/ulr.js";
import {nanoid} from "nanoid";

async function handleGenerateUrl(req,res){
       const body = req.body;
       const shortId = nanoid(8);
       await Url.create({
        originalUrl: body.originalUrl,
        shortId:shortId,
        createdby: req.user._id,
      })

      const urls = await Url.find({createdby:req.user._id})
      res.render("home",{id:shortId,urlArry:urls})
      }

async function handleGetShortUrl(req,res){
    const ShortId = req.params.shortId
    const URL = await Url.findOne({shortId:ShortId})
    res.redirect(URL.originalUrl)
    }


export  {
    handleGenerateUrl,
    handleGetShortUrl
}