import express from "express";
import { GetAllUser, signUp, Login } from "../controllers/Auth-controllers";

const router=express.Router();

router.post("/signUp",signUp);
router.post("/Login",Login);


export default router;