// Importe os módulos ou dependências necessárias
const ExpenseIncome = require('../models/ExpenseIncome');
const User = require('../models/User');

async function addExpenseIncome(req) {
  try {
    const expenseData = req.body.rows;
    const user = await User.findOne({ email: req.body.email });

    const savedExpenseIncomeList = [];
    for (const expense of expenseData) {
      // Create a new expense object with the provided data
      const newExpenseIncome = new ExpenseIncome({
        date: expense.date,
        type: expense.type,
        name: expense.name,
        amount: expense.amount,
        frequency: expense.frequency,
        userId: user._id
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

async function getExpenseIncome(req) {
  try {
    console.log('Entrada Na função no Back');
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const user = await User.findOne({ email: req.body.email });
    console.log(startDate);
    console.log(endDate);
    console.log(req.body.email);
    const expenseIncomeList = await ExpenseIncome.find({
      userId: user._id,
      date: { $gte: startDate, $lte: endDate }
    });
    console.log('Sucess na funcao do back');
    return expenseIncomeList;
  } catch (error) {
    throw new Error(`Failed to fetch the expense/income: ${error.message}`);
  }
}

module.exports = {
  addExpenseIncome,
  getExpenseIncome
};




