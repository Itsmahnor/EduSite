const express = require('express');
const router = express.Router();
const Instructor = require('../Models/Instructor'); 

// POST route to create a new instructor
router.post('/instructors', async (req, res) => {
  let { fullName, email, phoneNumber, courseExpertise, bio } = req.body;

  try {
    // Ensure courseExpertise is always an array
    if (!Array.isArray(courseExpertise)) {
      courseExpertise = typeof courseExpertise === 'string'
        ? courseExpertise.split(',').map((item) => item.trim())
        : [];
    }

    // Check if an instructor with the same email already exists
    let instructor = await Instructor.findOne({ email });

    if (instructor) {
      // Update courseExpertise if the email exists
      const newExpertise = courseExpertise.filter(
        (course) => !instructor.courseExpertise.includes(course)
      );

      instructor.courseExpertise.push(...newExpertise);
      await instructor.save();

      return res.status(200).json({
        message: 'Existing profile updated with new expertise',
        instructor,
      });
    }

    // Create a new instructor if email doesn't exist
    instructor = new Instructor({
      fullName,
      email,
      phoneNumber,
      courseExpertise,
      bio,
    });

    await instructor.save();
    res.status(201).json({
      message: 'Instructor profile created successfully',
      instructor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
