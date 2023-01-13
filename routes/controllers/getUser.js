import User from "../../models/user.model.js";

const getUser = (req,res)=>{
    // const username = req.params.username;
    // User.findOne({"username" : username},(err, user)=>{
    //     if(err) res.send(err);
    //     console.log(user);
    //     res.send(user).status(200);
    // })
    console.log("worked");
}

export {getUser};