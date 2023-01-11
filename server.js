import express from "express";
import dotenv from "dotenv";
import db from "./db/mongoDB.js";
import router from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/user", router);
app.use("/user", authRouter);

app.get("/",(req, res)=>{
    res.json({msg:"working!!!"})
})

const PORT = process.env.PORT || 9000;

app.listen(PORT,()=>{
    console.log(`Server is listning on port - ${process.env.PORT}`);
});