// expenseIncomeService.js

// Importe os módulos ou dependências necessárias
const ExpenseIncome = require('../models/ExpenseIncome');

// Função para adicionar uma nova despesa e ganho
async function addExpenseIncome(userId, expenseIncomeData) {
  try {
    // Crie um novo objeto de despesa e ganho com os dados fornecidos
    const newExpenseIncome = new ExpenseIncome({
      userId,
      description: expenseIncomeData.description,
      amount: expenseIncomeData.amount,
      // Outros campos relevantes para a despesa e ganho
    });

    // Salve a nova despesa e ganho no banco de dados
    const savedExpenseIncome = await newExpenseIncome.save();

    return savedExpenseIncome;
  } catch (error) {
    throw new Error(`Falha ao adicionar a despesa e ganho: ${error.message}`);
  }
}

// Função para buscar as despesas e ganhos e ganhos de um usuário
async function getExpenseIncomes(userId) {
  try {
    // Busque as despesas e ganhos pelo ID do usuário no banco de dados
    const expensesIncomes = await ExpenseIncome.find({ userId });

    // Retorne as despesas e ganhos encontradas
    return expensesIncomes;
  } catch (error) {
    throw new Error(`Falha ao buscar as despesas e ganhos: ${error.message}`);
  }
}

// Função para remover uma despesa e ganho
async function removeExpenseIncome(expenseIncomeId) {
  try {
    // Remova a despesa e ganho pelo ID no banco de dados
    const removedExpenseIncome = await ExpenseIncome.findByIdAndRemove(expenseIncomeId);

    // Verifique se a despesa e ganho existe e foi removida com sucesso
    if (!removedExpenseIncome) {
      throw new Error('Falha ao remover a despesa e ganho.');
    }

    return removedExpenseIncome;
  } catch (error) {
    throw new Error(`Falha ao remover a despesa e ganho: ${error.message}`);
  }
}

// Função para atualizar uma despesa e ganho
async function updateExpenseIncome(expenseIncomeId, updatedData) {
  try {
    // Atualize os campos desejados da despesa e ganho no banco de dados
    const updatedExpenseIncome = await ExpenseIncome.findByIdAndUpdate(expenseIncomeId, updatedData, { new: true });

    // Verifique se a despesa e ganho existe e foi atualizada com sucesso
    if (!updatedExpenseIncome) {
      throw new Error('Falha ao atualizar a despesa e ganho.');
    }

    return updatedExpenseIncome;
  } catch (error) {
    throw new Error(`Falha ao atualizar a despesa e ganho: ${error.message}`);
  }
}

module.exports = {
  addExpenseIncome,
  getExpenseIncomes,
  removeExpenseIncome,
  updateExpenseIncome,
};
