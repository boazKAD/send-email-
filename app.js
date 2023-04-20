import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routsed";

const app= express();

app.use(express.json());

app.use('/api/v1',router);
app.use("/api/v1/blog", blogRouter);
 
mongoose.connect(
    
    ).then(()=>app.listen(5000)).then(()=>console.log("connected to database and listening to 5000"))
    .catch((err)=> console.log(err));




