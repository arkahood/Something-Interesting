import express from "express";
import User from "../models/user.model.js";
import getAuthtoken from "../utils/getAuthtoken.js";

const router = express.Router();

router.post("/signup",async(req,res)=>{
    const {username, email, password} = req.body;

    // Check if username already exits or not
    const isUsernameExists = await User.findOne({username : username });
    if(isUsernameExists) return res.status(400).send({msg : "Username alreary exists"});

    // Check if email already exits or not
    const isEmailExists = await User.findOne({email : email });
    if(isEmailExists) return res.status(400).send({msg : "Email alreary exists"});

    const user = new User({...req.body});
    //Save the user to DB
    user.save();

    //Generate the token
    const token = getAuthtoken(user);
    res.send(token);
});

router.post("/signin",async(req,res)=>{
    const {username, email, password} = req.body;

    // Check if username exits or not
    const isUsernameExists = await User.findOne({username : username });
    if(!isUsernameExists) return res.status(400).send({msg : "Username don't exists"});

    // Check if email exits or not
    const isEmailExists = await User.findOne({email : email });
    if(!isEmailExists) return res.status(400).send({msg : "Email don't exists"});

    if(!(isEmailExists.password === password)) return res.status(400).send({msg : "password didn't match"});

    //generate the token
    const token = getAuthtoken(isEmailExists);
    res.status(200).send(token);
})

export default router;