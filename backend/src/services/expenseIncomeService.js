// expenseIncomeService.js

// Import the necessary modules or dependencies
const ExpenseIncome = require('../models/ExpenseIncome');

// Function to add a new expense and income
async function addExpenseIncome(userId, expenseIncomeData) {
  try {
    // Create a new expense and income object with the provided data
    const newExpenseIncome = new ExpenseIncome({
      userId,
      data: expenseIncomeData.data,
      tipo: expenseIncomeData.tipo,
      nome: expenseIncomeData.nome,
      valor: expenseIncomeData.valor,
    });

    // Save the new expense and income to the database
    const savedExpenseIncome = await newExpenseIncome.save();

    return savedExpenseIncome;
  } catch (error) {
    throw new Error(`Failed to add the expense and income: ${error.message}`);
  }
}

// Function to get expenses and incomes of a user
async function getExpenseIncomes(userId) {
  try {
    // Fetch expenses and incomes by the user ID from the database
    const expensesIncomes = await ExpenseIncome.find({ userId });

    // Return the found expenses and incomes
    return expensesIncomes;
  } catch (error) {
    throw new Error(`Failed to fetch the expenses and incomes: ${error.message}`);
  }
}

// Function to remove an expense and income
async function removeExpenseIncome(expenseIncomeId) {
  try {
    // Remove the expense and income by the ID from the database
    const removedExpenseIncome = await ExpenseIncome.findByIdAndRemove(expenseIncomeId);

    // Check if the expense and income exists and was successfully removed
    if (!removedExpenseIncome) {
      throw new Error('Failed to remove the expense and income.');
    }

    return removedExpenseIncome;
  } catch (error) {
    throw new Error(`Failed to remove the expense and income: ${error.message}`);
  }
}

// Function to update an expense and income
async function updateExpenseIncome(expenseIncomeId, updatedData) {
  try {
    // Update the desired fields of the expense and income in the database
    const updatedExpenseIncome = await ExpenseIncome.findByIdAndUpdate(expenseIncomeId, updatedData, { new: true });

    // Check if the expense and income exists and was successfully updated
    if (!updatedExpenseIncome) {
      throw new Error('Failed to update the expense and income.');
    }

    return updatedExpenseIncome;
  } catch (error) {
    throw new Error(`Failed to update the expense and income: ${error.message}`);
  }
}

module.exports = {
  addExpenseIncome,
  getExpenseIncomes,
  removeExpenseIncome,
  updateExpenseIncome,
};
