import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    content: [
      {
        type: { type: String, enum: ["text", "image"], required: true },
        src: { type: String },
      },
    ],
  },
  { timestamps: true }
);
const BlogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default BlogModel;

// import mongoose, { Schema } from "mongoose";

// const blogSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     subtitle: { type: String, required: true },
//     content: [
//       {
//         contentType: { type: String, enum: ["text", "image"], required: true },
//         value: { type: String },
//         src: { type: String },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const BlogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);

// export default BlogModel;
