import express from "express";
import mongoose from "mongoose";
import router from "./routes/Auth-routes";
import userRouter from "./routes/user-routes";
import dotenv from "dotenv";

const app= express();

app.use(express.json());

app.use('/api/v1',router);
app.use("/api/v1", userRouter);

dotenv.config();
 
mongoose.connect( process.env.MONGO_URL)
    
    .then(()=>console.log("connected to database and listening to 5000"))
    .catch((err)=> console.log(err));

app.listen(5000,() =>{
    console.log("server is running on 5000");
})


