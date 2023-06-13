const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const AuthService = require('../services/authService');


// Rota de Registro de usuário
router.post('/register', AuthService.registerUser);

// Rota de login
router.post('/login', AuthService.authenticateUser);

// Rota de logout
router.post('/logout', AuthController.logout);

// Add a default error handler for unsupported HTTP methods
router.all('/register', (req, res) => {
    res.status(405).send('Method Not Allowed');
  });

module.exports = router;
