const Router = require('express').Router();
const User = require('../Models/Register');


// Sign up
Router.post('/register', async (req, res) => {
  try {
    const { email, selectedCourse, ...otherDetails } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
      // If user exists, add the course to their list
      if (user.courses.includes(selectedCourse)) {
        return res.status(400).json({ message: 'You have already applied for this course' });
      }

      user.courses.push(selectedCourse);
      await user.save();
      return res.status(200).json({ message: 'Course added successfully' });
    }

    // If user doesn't exist, create a new user
  
    user = new User({
      ...otherDetails,
      email,
      courses: [selectedCourse]
   
    });

    await user.save();
    res.status(200).json({ message: 'User registered and course added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = Router; 
