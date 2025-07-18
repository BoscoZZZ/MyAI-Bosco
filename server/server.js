import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import chat from "./chat.js";

dotenv.config();

const app = express();
app.use(cors());

const uploadDir = "uploads/";

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only .pdf and .png formats are allowed!"), false);
    }
  },
});

const PORT = 5001;

let filePath;

app.post("/upload", (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).send(err.message);
    } else if (err) {
      return res.status(400).send(err.message);
    }

    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    filePath = req.file.path; // Save file path
    res.send(filePath + " uploaded successfully.");
  });
});

app.get("/chat", async (req, res) => {
  if (!filePath) {
    return res.status(400).send("No file uploaded yet.");
  }
  const resp = await chat(filePath, req.query.question); // Pass file path to chat function
  res.send(resp.text);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
