// Simulated expense and income data
const expensesIncomes = [
  { id: 1, userId: 1, category: 'Alimentação', amount: 50 },
  { id: 2, userId: 1, category: 'Transporte', amount: 30 },
];

// Function to get expensesIncomes for a user
export const getExpenseIncomes = async (userId) => {
  try {
    // Simulated asynchronous call to fetch expenses and incomes
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const userExpensesIncomes = expensesIncomes.filter((expenseIncome) => expenseIncome.userId === userId);
        resolve(userExpensesIncomes);
      }, 1000);
    });

    return response;
  } catch (error) {
    throw new Error('Error fetching expensesIncomes');
  }
};

// // Function to add a new expense and income
// export const addExpenseIncome = async (userId, category, amount) => {
//   try {
//     // Simulated asynchronous call to add the expense and income
//     const response = await new Promise((resolve) => {
//       setTimeout(() => {
//         const newExpense = { id: Date.now(), userId, category, amount };
//         expensesIncomes.push(newExpense);
//         resolve(newExpense);
//       }, 1000);
//     });

//     return response;
//   } catch (error) {
//     throw new Error('Error adding the expenseIncome');
//   }
// };

export const addExpenseIncome = async (userId, expenseIncomeData) => {
  try {
    const response = await fetch('http://localhost:5000/expenseIncome/table', {
      method: 'POST',
      body: JSON.stringify({ userId, email, password }),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    });

    console.log('response: ', response);
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    throw new Error('Erro ao fazer o cadastro: ' + error.message);
  }
};

// Function to delete an expense and income
export const deleteExpenseIncome = async (expenseIncomeId) => {
  try {
    // Simulated asynchronous call to delete the expense and income
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = expensesIncomes.findIndex((expenseIncome) => expenseIncome.id === expenseIncomeId);
        if (index !== -1) {
          expensesIncomes.splice(index, 1);
          resolve({ success: true });
        } else {
          reject(new Error('Expense or Income not found'));
        }
      }, 1000);
    });

    return response;
  } catch (error) {
    throw new Error('Error deleting the expense or income');
  }
};
