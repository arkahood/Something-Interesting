import express from "express";
import { getUser } from "./controllers/getUser.js";
import { postUser } from "./controllers/postUser.js";

const router = express.Router();

router.get("/getUser/:username", getUser)

router.post("/postUser", postUser)

export default router;