const express = require('express');
const router = express.Router();
const ExpenseIncomeController = require('../controllers/ExpenseIncomeController');
const ExpenseIncomeService = require('../services/expenseIncomeService');

// Rota para criação de um novo gasto ou despesa
router.post('/create', async(req, res) => {
    // Lógica para lidar com a requisição POST
    console.log('Requisição POST recebida!');
    console.log('URL da requisição:', req.url);
    console.log('Corpo da requisição:', req.body);
    // const body = req.body; // O corpo da requisição, contendo os dados enviados pelo cliente
    ExpenseIncomeService.addExpenseIncome(req);
    // Faça o processamento necessário com os dados recebidos
  
    // Envie uma resposta ao cliente
    res.status(200).json({ message: 'Gasto/Despesa Registrada com sucesso!' });
    res.end();
  });

module.exports = router;