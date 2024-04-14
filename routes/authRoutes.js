const express = require('express');
const bcrypt = require('bcrypt');
const jwtUtils = require('../jwtUtils');
const User = require('../models/User'); // Assuming you have a User model

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  // Your registration logic here
  // Hash the password before saving to database
  // Generate JWT token after successful registration
});

// User Login
router.post('/login', async (req, res) => {
  // Your login logic here
  // Verify password and generate JWT token upon successful login
});

module.exports = router;
