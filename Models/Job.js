const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  applicantName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@gmail\.com$/, // Ensure the email ends with @gmail.com
  },
  resume: {
    type: String, // Path to the uploaded resume
    required: false,
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Application", applicationSchema);
