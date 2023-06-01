const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Rota para criação de usuário
router.post('/users', UserController.createUser);

module.exports = router;
