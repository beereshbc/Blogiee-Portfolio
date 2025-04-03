import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema.mongoose(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    content: [
      {
        type: { type: String, enum: ["text", "image"] },
        value: { type: String },
        src: { type: String },
      },
    ],
  },
  { timestamps: true }
);
const ProjectModel =
  mongoose.model.blog || mongoose.model("project", projectSchema);

export default ProjectModel;
