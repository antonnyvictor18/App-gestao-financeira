const ExpenseIncome = require('../models/ExpenseIncome');

const ExpenseIncomeController = {
  async createExpenseIncome(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { date, type, name, amount, frequency } = req.body;
      console.log('Recebidos: ' + date, type, name, amount, frequency, userId);
      const newExpenseIncome = new ExpenseIncome({
        date, 
        type, 
        name, 
        amount, 
        frequency,
        userId
      });

      await newExpenseIncome.save();

      return res.status(201).json(newExpenseIncome);
    } catch (error) {
      console.error('Error in ExpenseIncomeController.createExpenseIncome:', error);
      return res.status(500).json({ error: 'Failed to createExpenseIncome' });
    }
  }
};

module.exports = ExpenseIncomeController;
    