import express from 'express';
import { GetAllBlogs, addBlog, updateBlog } from '../controllers/productControllers';

const blogRouter=express.Router();

blogRouter.get("/GetAllBlogs",GetAllBlogs);
blogRouter.post("/addBlog",addBlog);
blogRouter.put("/updateBlog/:Id",updateBlog);




export default blogRouter;