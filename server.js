import express from "express";
import dotenv from "dotenv";
import db from "./db/mongoDB.js";
import router from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cors from 'cors';



import path from 'path';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/user", router);
app.use("/user", authRouter);


const PORT = process.env.PORT || 9000;

// Serving my front-end from express Server
app.use(express.static("client/public"));
app.get("/",(req,res)=>{
    console.log("w");
    res.sendFile(path.join(__dirname,"client","public","index.html"));
})

app.listen(PORT,()=>{
    console.log(`Server is listning on port - ${process.env.PORT}`);
});