// models/CourseCategory.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },  // storing icon name as string
  route: { type: String, required: true }
});

const courseCategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  courses: [courseSchema]
});

module.exports = mongoose.model("CourseCategory", courseCategorySchema);
