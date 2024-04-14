// routes/index.js
const express = require('express');
const authController = require('../controllers/authController');
const path = require('path');

const router = express.Router();

// User registration route
router.post('/register', authController.register);

// Serve the register.html file
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

module.exports = router;
