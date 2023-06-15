const Expense = require('../models/Expense');
const Income = require('../models/Income');

const ReportController = {
  async generateReport(req, res) {
    try {
      // Obtém o ID do usuário logado a partir do token ou autenticação
      const userId = req.user.id;

      // Consulta todas as despesas do usuário
      const expenses = await Expense.find({ user: userId });

      // Consulta todas as receitas do usuário
      const incomes = await Income.find({ user: userId });

      // Calcula o total das despesas
      const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

      // Calcula o total das receitas
      const totalIncomes = incomes.reduce((acc, income) => acc + income.amount, 0);

      // Calcula o saldo total
      const balance = totalIncomes - totalExpenses;

      // Monta o relatório
      const report = {
        totalExpenses,
        totalIncomes,
        balance
      };

      return res.json(report);
    } catch (error) {
      console.error('Error in ReportController.generateReport:', error);
      return res.status(500).json({ error: 'Failed to generate report' });
    }
  },

  async generateCategoryReport(req, res) {
    try {
      // Obtém o ID do usuário logado a partir do token ou autenticação
      const userId = req.user.id;

      // Consulta todas as despesas do usuário agrupadas por categoria
      const expensesByCategory = await Expense.aggregate([
        { $match: { user: userId } },
        { $group: { _id: '$category', total: { $sum: '$amount' } } }
      ]);

      // Monta o relatório por categoria
      const reportByCategory = expensesByCategory.map(({ _id, total }) => ({ category: _id, total }));

      return res.json(reportByCategory);
    } catch (error) {
      console.error('Error in ReportController.generateCategoryReport:', error);
      return res.status(500).json({ error: 'Failed to generate category report' });
    }
  }
};

module.exports = ReportController;
