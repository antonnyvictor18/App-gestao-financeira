const express = require('express');
const router = express.Router();
const CreditCardController = require('../controllers/CreditCardController');

// Rota para criação de um novo cartão de crédito
router.post('/credit-cards', CreditCardController.createCreditCard);

// Rota para obtenção de todos os cartões de crédito do usuário logado
router.get('/credit-cards', CreditCardController.getAllCreditCards);

// Rota para obtenção de um cartão de crédito específico do usuário logado
router.get('/credit-cards/:id', CreditCardController.getCreditCardById);

// Rota para atualização de um cartão de crédito específico do usuário logado
router.put('/credit-cards/:id', CreditCardController.updateCreditCard);

// Rota para exclusão de um cartão de crédito específico do usuário logado
router.delete('/credit-cards/:id', CreditCardController.deleteCreditCard);

module.exports = router;
