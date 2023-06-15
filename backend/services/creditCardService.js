// creditCardService.js

// Importe os módulos ou dependências necessárias
const CreditCard = require('../models/CreditCard');

// Função para adicionar um novo cartão de crédito
async function addCreditCard(userId, creditCardData) {
  try {
    // Crie um novo objeto de cartão de crédito com os dados fornecidos
    const newCreditCard = new CreditCard({
      userId,
      cardNumber: creditCardData.cardNumber,
      limit: creditCardData.limit,
      // Outros campos relevantes para o cartão de crédito
    });

    // Salve o novo cartão de crédito no banco de dados
    const savedCreditCard = await newCreditCard.save();

    return savedCreditCard;
  } catch (error) {
    throw new Error(`Falha ao adicionar o cartão de crédito: ${error.message}`);
  }
}

// Função para buscar os cartões de crédito de um usuário
async function getCreditCards(userId) {
  try {
    // Busque os cartões de crédito pelo ID do usuário no banco de dados
    const creditCards = await CreditCard.find({ userId });

    // Retorne os cartões de crédito encontrados
    return creditCards;
  } catch (error) {
    throw new Error(`Falha ao buscar os cartões de crédito: ${error.message}`);
  }
}

// Função para remover um cartão de crédito
async function removeCreditCard(creditCardId) {
  try {
    // Remova o cartão de crédito pelo ID no banco de dados
    const removedCreditCard = await CreditCard.findByIdAndRemove(creditCardId);

    // Verifique se o cartão de crédito existe e foi removido com sucesso
    if (!removedCreditCard) {
      throw new Error('Falha ao remover o cartão de crédito.');
    }

    return removedCreditCard;
  } catch (error) {
    throw new Error(`Falha ao remover o cartão de crédito: ${error.message}`);
  }
}

// Função para atualizar um cartão de crédito
async function updateCreditCard(creditCardId, updatedData) {
  try {
    // Atualize os campos desejados do cartão de crédito no banco de dados
    const updatedCreditCard = await CreditCard.findByIdAndUpdate(creditCardId, updatedData, { new: true });

    // Verifique se o cartão de crédito existe e foi atualizado com sucesso
    if (!updatedCreditCard) {
      throw new Error('Falha ao atualizar o cartão de crédito.');
    }

    return updatedCreditCard;
  } catch (error) {
    throw new Error(`Falha ao atualizar o cartão de crédito: ${error.message}`);
  }
}

module.exports = {
  addCreditCard,
  getCreditCards,
  removeCreditCard,
  updateCreditCard,
};
