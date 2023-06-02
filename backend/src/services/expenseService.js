// expenseService.js

// Importe os módulos ou dependências necessárias
const Expense = require('../models/Expense');

// Função para adicionar uma nova despesa
async function addExpense(userId, expenseData) {
  try {
    // Crie um novo objeto de despesa com os dados fornecidos
    const newExpense = new Expense({
      userId,
      description: expenseData.description,
      amount: expenseData.amount,
      // Outros campos relevantes para a despesa
    });

    // Salve a nova despesa no banco de dados
    const savedExpense = await newExpense.save();

    return savedExpense;
  } catch (error) {
    throw new Error(`Falha ao adicionar a despesa: ${error.message}`);
  }
}

// Função para buscar as despesas de um usuário
async function getExpenses(userId) {
  try {
    // Busque as despesas pelo ID do usuário no banco de dados
    const expenses = await Expense.find({ userId });

    // Retorne as despesas encontradas
    return expenses;
  } catch (error) {
    throw new Error(`Falha ao buscar as despesas: ${error.message}`);
  }
}

// Função para remover uma despesa
async function removeExpense(expenseId) {
  try {
    // Remova a despesa pelo ID no banco de dados
    const removedExpense = await Expense.findByIdAndRemove(expenseId);

    // Verifique se a despesa existe e foi removida com sucesso
    if (!removedExpense) {
      throw new Error('Falha ao remover a despesa.');
    }

    return removedExpense;
  } catch (error) {
    throw new Error(`Falha ao remover a despesa: ${error.message}`);
  }
}

// Função para atualizar uma despesa
async function updateExpense(expenseId, updatedData) {
  try {
    // Atualize os campos desejados da despesa no banco de dados
    const updatedExpense = await Expense.findByIdAndUpdate(expenseId, updatedData, { new: true });

    // Verifique se a despesa existe e foi atualizada com sucesso
    if (!updatedExpense) {
      throw new Error('Falha ao atualizar a despesa.');
    }

    return updatedExpense;
  } catch (error) {
    throw new Error(`Falha ao atualizar a despesa: ${error.message}`);
  }
}

module.exports = {
  addExpense,
  getExpenses,
  removeExpense,
  updateExpense,
};
