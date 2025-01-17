const Router = require('express').Router();
const Con = require('../Models/Contact'); // Adjust the path as needed

// Sign up or add message
Router.post('/Contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if the user already exists
    let user = await Con.findOne({ email });

    if (user) {
     

      // Add the new message to the existing user's message array
      user.message.push(message);
      await user.save();
      return res.status(200).json({ message: 'Message added successfully' });
    }

    // If user doesn't exist, create a new user
    user = new Con({
      name,
      email,
      message: [message], // Add the message as the first entry
    });

    await user.save();
    res.status(200).json({ message: 'User registered and message added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});

module.exports = Router;
