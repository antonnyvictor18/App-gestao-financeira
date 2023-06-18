const express = require('express');
const router = express.Router();
const ExpenseIncomeController = require('../controllers/ExpenseIncomeController');

// Rota para criação de uma nova despesa e ganho
router.post('/expenses&incomes', ExpenseIncomeController.createExpenseIncome);

// Rota para obtenção de todas as despesas e ganhos do usuário logado
router.get('/expenses&incomes', ExpenseIncomeController.getAllExpensesIncomes);

// Rota para obtenção de uma despesa e ganho específica do usuário logado
router.get('/expenses&incomes/:id', ExpenseIncomeController.getExpenseIncomeById);

// Rota para atualização de uma despesa e ganho específica do usuário logado
router.put('/expenses&incomes/:id', ExpenseIncomeController.updateExpenseIncome);

// Rota para exclusão de uma despesa e ganho específica do usuário logado
router.delete('/expenses&incomes/:id', ExpenseIncomeController.deleteExpenseIncome);

module.exports = router;
