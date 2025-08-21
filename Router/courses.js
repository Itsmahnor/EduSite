// routes/courses.js
const express = require("express");
const router = express.Router();
const CourseCategory = require("../Models/CourseCategory");

// GET /api/courses - Fetch all course categories
router.get("/", async (req, res) => {
  try {
    const courses = await CourseCategory.find({});
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Failed to fetch courses data" });
  }
});

module.exports = router;
