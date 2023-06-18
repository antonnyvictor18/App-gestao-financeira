// Importe os módulos ou dependências necessárias
const ExpenseIncome = require('../models/ExpenseIncome');

async function addExpenseIncome(req) {
  try {
    const expenseData = req.body.rows;
    const { userId } = req.body.userId;

    const savedExpenseIncomeList = [];
    for (const expense of expenseData) {
      // Create a new expense object with the provided data
      const newExpenseIncome = new ExpenseIncome({
        date: expense.date,
        type: expense.type,
        name: expense.name,
        amount: expense.amount,
        frequency: expense.frequency,
        userId: userId
      });
      
      // Save the new expense in the database
      const savedExpenseIncome = await newExpenseIncome.save();
      savedExpenseIncomeList.push(savedExpenseIncome);
    }
    
    return savedExpenseIncomeList;
  } catch (error) {
    throw new Error(`Failed to add the expense/income: ${error.message}`);
  }
}

module.exports = {
  addExpenseIncome,
};
