import express from "express";
import jwt from "jsonwebtoken";
import { getUser } from "./controllers/getUser.js";
import { postUser } from "./controllers/postUser.js";

const router = express.Router();

const middle = (req, res, next)=>{
    const tokenJWT = req.headers.authorization;
    const token = tokenJWT.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, verified)=>{
        if(err){
            res.send(err);
        }else{
            res.send(verified);
        }
    })
    next();
}

router.get("/getUser", middle ,getUser)

router.post("/postUser", postUser)

export default router;