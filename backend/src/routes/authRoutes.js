const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const AuthService = require('../services/authService');


// Rota de Registro de usuário
router.post('/auth/register', AuthService.registerUser);

// Rota de login
router.post('/auth/login', AuthService.authenticateUser);

// Rota de logout
router.post('/auth/logout', AuthController.logout);

module.exports = router;
