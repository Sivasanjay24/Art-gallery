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

module.exports = router;