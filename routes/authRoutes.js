const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Rota de login
router.post('/auth/login', AuthController.login);

// Rota de logout
router.post('/auth/logout', AuthController.logout);

module.exports = router;
