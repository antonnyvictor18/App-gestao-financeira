const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/ExpenseController');

// Rota para criação de uma nova despesa
router.post('/expenses', ExpenseController.createExpense);

// Rota para obtenção de todas as despesas do usuário logado
router.get('/expenses', ExpenseController.getAllExpenses);

// Rota para obtenção de uma despesa específica do usuário logado
router.get('/expenses/:id', ExpenseController.getExpenseById);

// Rota para atualização de uma despesa específica do usuário logado
router.put('/expenses/:id', ExpenseController.updateExpense);

// Rota para exclusão de uma despesa específica do usuário logado
router.delete('/expenses/:id', ExpenseController.deleteExpense);

module.exports = router;
