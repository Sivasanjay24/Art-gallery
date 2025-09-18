const express = require("express");
const multer = require("multer");
const { cloudinary } = require("../utils/cloudinary");
const Post = require("../models/posts");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const os = require("os");

const upload = multer({ dest: os.tmpdir() });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const {
      title,
      description,
      medium,
      dimensions,
      exhibition,
      exhibitionDescription,
      userId,
    } = req.body;

    const filePath = req.file.path;

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "art_gallery",
    });

    fs.unlinkSync(filePath);

    const post = new Post({
      title,
      description,
      medium,
      dimensions,
      exhibition,
      exhibitionDescription,
      userId,
      imagePath: result.secure_url,
    });

    await post.save();
    res.status(201).json({ message: "Post created", post });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    // Finds all documents in the Post collection
    const posts = await Post.find();
    // Sends the retrieved posts as a JSON response
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add this new route to your postroutes.js file
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;