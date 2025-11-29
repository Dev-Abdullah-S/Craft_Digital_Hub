import user from "./user.controller.js"
import express from "express";

const router = express.Router();

router.post("/signup", user.SignUp)
router.post("/login" , user.Login)

export default router;