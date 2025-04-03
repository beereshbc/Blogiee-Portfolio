import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/mongoDB.js";
import blogRouter from "./routes/blogRoute.js";
import connectCloudinary from "./config/cloudinary.js";

const port = process.env.PORT || 3000;

const app = express();
await connectDB();
await connectCloudinary();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/blog", blogRouter);

app.get("/", (req, res) => {
  res.send("Hello Server hosted successfully");
});

app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});
