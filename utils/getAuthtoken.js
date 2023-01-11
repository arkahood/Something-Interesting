import jwt from 'jsonwebtoken';

const getAuthtoken = (user)=>{
    const token = jwt.sign(
        {
            username : user.username,
            email : user.email,
            _id : user._id
        },
        process.env.JWT_SECRET_KEY
    );
    return token;
}

export default getAuthtoken;