// userDataService.js

// Importe os módulos ou dependências necessárias
const User = require('../models/User');

// Função para buscar os dados pessoais de um usuário
async function getUserData(userId) {
  try {
    // Busque o usuário pelo ID no banco de dados
    const user = await User.findById(userId);

    // Verifique se o usuário existe
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    // Retorne os dados pessoais do usuário
    return {
      email: user.email,
      // Outros campos de dados pessoais que você queira retornar
    };
  } catch (error) {
    throw new Error(`Falha ao buscar os dados do usuário: ${error.message}`);
  }
}

// Função para atualizar os dados pessoais de um usuário
async function updateUserData(userId, newData) {
  try {
    // Atualize os campos desejados do usuário no banco de dados
    const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });

    // Verifique se o usuário existe e foi atualizado com sucesso
    if (!updatedUser) {
      throw new Error('Falha ao atualizar os dados do usuário.');
    }

    // Retorne os dados pessoais atualizados do usuário
    return {
      email: updatedUser.email,
      // Outros campos de dados pessoais atualizados
    };
  } catch (error) {
    throw new Error(`Falha ao atualizar os dados do usuário: ${error.message}`);
  }
}

module.exports = {
  getUserData,
  updateUserData,
};
