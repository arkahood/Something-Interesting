import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB connected Sucessfully");
}).catch((e)=>{
    console.log(e);
})

const db = mongoose.connection;

export default db;