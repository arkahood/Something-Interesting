import express from "express";
import dotenv from "dotenv";
import db from "./db/mongoDB.js";
import router from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/user", router);

app.get("/",(req, res)=>{
    res.json({msg:"working!!!"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listning on port - ${process.env.PORT}`);
});