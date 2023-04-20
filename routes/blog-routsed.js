import express from 'express';
import { GetAllBlogs, addBlog, updateBlog } from '../controllers/blog-controllers';

const blogRouter=express.Router();

blogRouter.get("/GetAllBlogs",GetAllBlogs);
blogRouter.post("/addBlog",addBlog);
blogRouter.put("/updateBlog/:Id",updateBlog);




export default blogRouter;