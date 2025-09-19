const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    medium: { type: String, required: true },
    dimensions: { type: String, required: true },
    exhibition: { type: String, required: true },
    exhibitionDescription: { type: String, required: true },
    userId: { type: String, required: true },
    imagePath: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
