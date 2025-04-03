import { v2 as cloudinary } from "cloudinary";
import BlogModel from "../models/blogModel.js";

const createBlog = async (req, res) => {
  try {
    const { title, subtitle, content } = req.body;
    let parsedContent = [];
    if (typeof content === "string") {
      parsedContent = JSON.parse(content);
    }

    if (req.files && req.files.length > 0) {
      for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        const result = await cloudinary.uploader.upload(file.path);

        if (parsedContent[i] && parsedContent[i].type === "image") {
          parsedContent[i].src = result.secure_url;
        }
        // console.log("Uploaded file result:", result);
        // console.log("Parsed content:", parsedContent);
      }
    }

    const newBlog = new BlogModel({ title, subtitle, content: parsedContent });
    await newBlog.save();
    res.json({ success: true, message: "Blog created successfully " });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const blogData = await BlogModel.find({});
    res.json({ success: true, message: "data fetched successfully", blogData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { createBlog, getBlog };
