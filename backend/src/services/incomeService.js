// incomeService.js

// Importe os módulos ou dependências necessárias
const Income = require('../models/Income');

// Função para adicionar uma nova receita
async function addIncome(userId, incomeData) {
  try {
    // Crie um novo objeto de receita com os dados fornecidos
    const newIncome = new Income({
      userId,
      description: incomeData.description,
      amount: incomeData.amount,
      // Outros campos relevantes para a receita
    });

    // Salve a nova receita no banco de dados
    const savedIncome = await newIncome.save();

    return savedIncome;
  } catch (error) {
    throw new Error(`Falha ao adicionar a receita: ${error.message}`);
  }
}

// Função para buscar as receitas de um usuário
async function getIncomes(userId) {
  try {
    // Busque as receitas pelo ID do usuário no banco de dados
    const incomes = await Income.find({ userId });

    // Retorne as receitas encontradas
    return incomes;
  } catch (error) {
    throw new Error(`Falha ao buscar as receitas: ${error.message}`);
  }
}

// Função para remover uma receita
async function removeIncome(incomeId) {
  try {
    // Remova a receita pelo ID no banco de dados
    const removedIncome = await Income.findByIdAndRemove(incomeId);

    // Verifique se a receita existe e foi removida com sucesso
    if (!removedIncome) {
      throw new Error('Falha ao remover a receita.');
    }

    return removedIncome;
  } catch (error) {
    throw new Error(`Falha ao remover a receita: ${error.message}`);
  }
}

// Função para atualizar uma receita
async function updateIncome(incomeId, updatedData) {
  try {
    // Atualize os campos desejados da receita no banco de dados
    const updatedIncome = await Income.findByIdAndUpdate(incomeId, updatedData, { new: true });

    // Verifique se a receita existe e foi atualizada com sucesso
    if (!updatedIncome) {
      throw new Error('Falha ao atualizar a receita.');
    }

    return updatedIncome;
  } catch (error) {
    throw new Error(`Falha ao atualizar a receita: ${error.message}`);
  }
}

module.exports = {
  addIncome,
  getIncomes,
  removeIncome,
  updateIncome,
};
