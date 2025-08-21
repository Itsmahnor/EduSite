// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    qualification: { type: String, required: true },
    gender: { type: String, required: true },
    programmingBackground: { type: String, required: true },
    // New fields for category & single course selection
    category: { type: String, required: true },
    course: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
