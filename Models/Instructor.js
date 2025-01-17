const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email uniqueness
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  courseExpertise: [
    {
      type: String,
      required: true,
    },
  ],
  bio: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
