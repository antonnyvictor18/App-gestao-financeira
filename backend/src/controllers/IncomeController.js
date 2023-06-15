const Income = require('../models/Income');

const IncomeController = {
  async createIncome(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { title, amount, category } = req.body;

      const newIncome = new Income({
        title,
        amount,
        category,
        user: userId
      });

      await newIncome.save();

      return res.status(201).json(newIncome);
    } catch (error) {
      console.error('Error in IncomeController.createIncome:', error);
      return res.status(500).json({ error: 'Failed to create income' });
    }
  },

  async getAllIncomes(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)

      const incomes = await Income.find({ user: userId });

      return res.json(incomes);
    } catch (error) {
      console.error('Error in IncomeController.getAllIncomes:', error);
      return res.status(500).json({ error: 'Failed to fetch incomes' });
    }
  },

  async getIncomeById(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { id } = req.params;

      const income = await Income.findOne({ _id: id, user: userId });

      if (!income) {
        return res.status(404).json({ error: 'Income not found' });
      }

      return res.json(income);
    } catch (error) {
      console.error('Error in IncomeController.getIncomeById:', error);
      return res.status(500).json({ error: 'Failed to fetch income' });
    }
  },

  async updateIncome(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { id } = req.params;
      const { title, amount, category } = req.body;

      const updatedIncome = await Income.findOneAndUpdate(
        { _id: id, user: userId },
        { title, amount, category },
        { new: true }
      );

      if (!updatedIncome) {
        return res.status(404).json({ error: 'Income not found' });
        }
      return res.json(updatedIncome);
    } 
    catch (error) {
      console.error('Error in IncomeController.updateIncome:', error);
      return res.status(500).json({ error: 'Failed to update income' });
    }
  },

  async deleteIncome(req, res) {
    try {
      const { userId } = req.user; // Supondo que você tenha um middleware para autenticação que adiciona o usuário ao objeto de requisição (req.user)
      const { id } = req.params;
      const deletedIncome = await Income.findOneAndDelete({ _id: id, user: userId });

      if (!deletedIncome) {
        return res.status(404).json({ error: 'Income not found' });
      }
    
      return res.json({ message: 'Income deleted successfully' });
    } 
    catch (error) {
      console.error('Error in IncomeController.deleteIncome:', error);
      return res.status(500).json({ error: 'Failed to delete income' });
    }
  }
};

module.exports = IncomeController;

