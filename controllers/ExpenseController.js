const Expense = require('../models/Expense');

const ExpenseController = {
  async createExpense(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { title, amount, category } = req.body;

      const newExpense = new Expense({
        title,
        amount,
        category,
        user: userId
      });

      await newExpense.save();

      return res.status(201).json(newExpense);
    } catch (error) {
      console.error('Error in ExpenseController.createExpense:', error);
      return res.status(500).json({ error: 'Failed to create expense' });
    }
  },

  async getAllExpenses(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)

      const expenses = await Expense.find({ user: userId });

      return res.json(expenses);
    } catch (error) {
      console.error('Error in ExpenseController.getAllExpenses:', error);
      return res.status(500).json({ error: 'Failed to fetch expenses' });
    }
  },

  async getExpenseById(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { id } = req.params;

      const expense = await Expense.findOne({ _id: id, user: userId });

      if (!expense) {
        return res.status(404).json({ error: 'Expense not found' });
      }

      return res.json(expense);
    } catch (error) {
      console.error('Error in ExpenseController.getExpenseById:', error);
      return res.status(500).json({ error: 'Failed to fetch expense' });
    }
  },

  async updateExpense(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { id } = req.params;
      const { title, amount, category } = req.body;

      const updatedExpense = await Expense.findOneAndUpdate(
        { _id: id, user: userId },
        { title, amount, category },
        { new: true }
      );

      if (!updatedExpense) {
        return res.status(404).json({ error: 'Expense not found' });
      }
      return res.json(updatedExpense);
    } 
    catch (error) {
      console.error('Error in ExpenseController.updateExpense:', error);
      return res.status(500).json({ error: 'Failed to update expense' });
    }
  },

  async deleteExpense(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { id } = req.params;
      const deletedExpense = await Expense.findOneAndDelete({ _id: id, user: userId });

      if (!deletedExpense) {
        return res.status(404).json({ error: 'Expense not found' });
      }

      return res.json({ message: 'Expense deleted successfully' });
    } 
    catch (error) {
      console.error('Error in ExpenseController.deleteExpense:', error);
      return res.status(500).json({ error: 'Failed to delete expense' });
    }
  }
};

module.exports = ExpenseController;
    