const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/postroutes");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 5000;
const MONGO_URL=process.env.MONGO_URL

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose.connect(MONGO_URL);
mongoose.connection.once("open", () => console.log("MongoDB connected"));

// Routes
app.use("/api/posts", postRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
