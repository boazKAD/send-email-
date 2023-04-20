import express from "express";
import { GetAllUser } from "../controllers/user-controllers";

const userRouter=express.Router();

userRouter.get("/GetAllUser",GetAllUser);


export default userRouter;