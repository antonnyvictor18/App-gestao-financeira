const ExpenseIncome = require('../models/ExpenseIncome');

const ExpenseIncomeController = {
  async createExpenseIncome(req, res) {
    try {
      const { userId } = req.user;
      const { data, tipo, nome, valor } = req.body;

      const newExpenseIncome = new ExpenseIncome({
        data,
        tipo,
        nome,
        valor,
        user: userId
      });

      await newExpenseIncome.save();

      return res.status(201).json(newExpenseIncome);
    } catch (error) {
      console.error('Error in ExpenseIncomeController.createExpenseIncome:', error);
      return res.status(500).json({ error: 'Failed to create expense/income' });
    }
  },

  async getAllExpensesIncomes(req, res) {
    try {
      const { userId } = req.user;

      const expensesIncomes = await ExpenseIncome.find({ user: userId });

      return res.json(expensesIncomes);
    } catch (error) {
      console.error('Error in ExpenseIncomeController.getAllExpenseIncomes:', error);
      return res.status(500).json({ error: 'Failed to fetch expenses/incomes' });
    }
  },

  async getExpenseIncomeById(req, res) {
    try {
      const { userId } = req.user;
      const { id } = req.params;

      const expenseIncome = await ExpenseIncome.findOne({ _id: id, user: userId });

      if (!expenseIncome) {
        return res.status(404).json({ error: 'Expense/income not found' });
      }

      return res.json(expenseIncome);
    } catch (error) {
      console.error('Error in ExpenseIncomeController.getExpenseIncomeById:', error);
      return res.status(500).json({ error: 'Failed to fetch expense/income' });
    }
  },

  async updateExpenseIncome(req, res) {
    try {
      const { userId } = req.user;
      const { id } = req.params;
      const { data, tipo, nome, valor } = req.body;

      const updatedExpenseIncome = await ExpenseIncome.findOneAndUpdate(
        { _id: id, user: userId },
        { data, tipo, nome, valor },
        { new: true }
      );

      if (!updatedExpenseIncome) {
        return res.status(404).json({ error: 'Expense/income not found' });
      }
      return res.json(updatedExpenseIncome);
    } 
    catch (error) {
      console.error('Error in ExpenseIncomeController.updateExpenseIncome:', error);
      return res.status(500).json({ error: 'Failed to update expense/income' });
    }
  },

  async deleteExpenseIncome(req, res) {
    try {
      const { userId } = req.user;
      const { id } = req.params;
      const deletedExpenseIncome = await ExpenseIncome.findOneAndDelete({ _id: id, user: userId });

      if (!deletedExpenseIncome) {
        return res.status(404).json({ error: 'Expense/income not found' });
      }

      return res.json({ message: 'Expense/income deleted successfully' });
    } 
    catch (error) {
      console.error('Error in ExpenseIncomeController.deleteExpenseIncome:', error);
      return res.status(500).json({ error: 'Failed to delete expense/income' });
    }
  }
};

module.exports = ExpenseIncomeController;
