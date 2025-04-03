import exppress from "express";
import { createBlog, getBlog } from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";

const blogRouter = exppress.Router();

blogRouter.post("/new-blog", upload.array("images", 5), createBlog);
blogRouter.get("/blogs", getBlog);

export default blogRouter;
