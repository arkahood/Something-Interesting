const postUser = (req,res)=>{
    const user = req.body;
    console.log(user);
    User.create({...user},(err, user)=>{
        if(err) res.send(err).status(400);
        res.send({msg : "Successfully Inserted"}).status(200);
    });
}

export {postUser};