import express from "express";
import { GetAllUser, signUp, Login } from "../controllers/user-controller";

const router=express.Router();

router.get("/GetAllUser",GetAllUser);
router.post("/signUp",signUp);
router.post("/Login",Login);


export default router;