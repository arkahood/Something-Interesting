import express from "express";
import User from "../models/user.model.js";
import getAuthtoken from "../utils/getAuthtoken.js";

const router = express.Router();

router.post("/signup",async(req,res)=>{
    const {username, email, password} = req.body;
    console.log(req.body);
    // Check if username or email already exits or not
    const alreadyExistedUser = await User.findOne({$or:[
        {username : username },
        {email : email}
    ]});
    if(alreadyExistedUser) return res.status(400).send({error : "Username or email alreary exists"});

    const user = new User({...req.body});
    try {
        //Save the user to DB
        user.save();
        //Generate the token
        const token = getAuthtoken(user);
        console.log(token);
        res.status(200).send({token});
    } catch (error) {
        console.log(err);
        res.status(400).send({msg: "not worked"});
    }
});

router.post("/signin",async(req,res)=>{
    const {username, password} = req.body;
    console.log(req.body);
    // Check if username exits or not
    try {
        const isUsernameExists = await User.findOne({username : username });
        console.log(isUsernameExists);
        if(!isUsernameExists) res.status(400).send({error : "Username don't exists"});

        if((isUsernameExists.password !== password)) res.status(400).send({error : "password didn't match"});

        //generate the token
        const token = getAuthtoken(isUsernameExists);
        res.status(200).send({token});
        
    } catch (error) {
        console.log(error);
    }
    
})

export default router;