const express = require('express');
const router = express.Router();
const IncomeController = require('../controllers/IncomeController');

// Rota para criação de uma nova receita
router.post('/incomes', IncomeController.createIncome);

// Rota para obtenção de todas as receitas do usuário logado
router.get('/incomes', IncomeController.getAllIncomes);

// Rota para obtenção de uma receita específica do usuário logado
router.get('/incomes/:id', IncomeController.getIncomeById);

// Rota para atualização de uma receita específica do usuário logado
router.put('/incomes/:id', IncomeController.updateIncome);

// Rota para exclusão de uma receita específica do usuário logado
router.delete('/incomes/:id', IncomeController.deleteIncome);

module.exports = router;
