// Simulated expense data
const expenses = [
  { id: 1, userId: 1, category: 'Alimentação', amount: 50 },
  { id: 2, userId: 1, category: 'Transporte', amount: 30 },
];

// Function to get expenses for a user
export const getExpenseIncomes = async (userId) => {
  try {
    // Simulated asynchronous call to fetch expenses
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const userExpenses = expenses.filter((expense) => expense.userId === userId);
        resolve(userExpenses);
      }, 1000);
    });

    return response;
  } catch (error) {
    throw new Error('Error fetching expenses');
  }
};

// Function to add a new expense
export const addExpenseIncome = async (userId, category, amount) => {
  try {
    // Simulated asynchronous call to add the expense
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        const newExpense = { id: Date.now(), userId, category, amount };
        expenses.push(newExpense);
        resolve(newExpense);
      }, 1000);
    });

    return response;
  } catch (error) {
    throw new Error('Error adding the expense');
  }
};

// Function to delete an expense
export const deleteExpenseIncome = async (expenseIncomeId) => {
  try {
    // Simulated asynchronous call to delete the expense
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = expenses.findIndex((expense) => expense.id === expenseIncomeId);
        if (index !== -1) {
          expenses.splice(index, 1);
          resolve({ success: true });
        } else {
          reject(new Error('Expense not found'));
        }
      }, 1000);
    });

    return response;
  } catch (error) {
    throw new Error('Error deleting the expense');
  }
};
