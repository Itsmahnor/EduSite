const express = require('express');
const cors = require('cors');
require('./Conn/Conn'); // MongoDB connection file
const Register = require('./Router/Register');
const Contact = require('./Router/Contact');
const Instructor = require('./Router/Instructor');
const applicationRoutes = require("./Router/Job");
const app = express();
const path = require("path");
// Middleware to parse incoming JSON
app.use(express.json()); // Automatically parses JSON requests

// Middleware to parse form data (if you're accepting form submissions)
app.use(express.urlencoded({ extended: false })); // Automatically parses URL-encoded data
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// CORS middleware
app.use(cors());

// Route Definitions
app.use('/api/viv', Register);
app.use('/api/con', Contact);
app.use('/api/ins', Instructor);
app.use("/api", applicationRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Serve static files from the dist folder
app.use(express.static(path.resolve(__dirname, "Frontend/Frontend", "dist")));

// Catch-all handler for client-side routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend/Frontend", "dist", "index.html"));
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
