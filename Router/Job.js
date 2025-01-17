const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Application = require("../Models/Job");

const router = express.Router();

// Create the 'uploads/resumes' folder if it doesn't exist
const uploadDir = path.join(__dirname, "..", "uploads", "resumes");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the path to the 'resumes' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to handle application submissions
router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { jobTitle, applicantName, email } = req.body;
    const resume = req.file ? req.file.path : null;

    const application = new Application({
      jobTitle,
      applicantName,
      email,
      resume,
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({ error: "Failed to submit application." });
  }
});

module.exports = router;
