// authService.js

// Importe os módulos ou dependências necessárias
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Função para registrar um novo usuário
async function registerUser(userData) {
  try {
    // Verifique se o usuário já está registrado
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('Este email já está registrado. Por favor, faça login.');
    }

    // Criptografe a senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Crie um novo objeto de usuário com os dados fornecidos
    const newUser = new User({
      email: userData.email,
      password: hashedPassword,
      // Outros campos de dados pessoais, se necessário
    });

    // Salve o novo usuário no banco de dados
    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    throw new Error(`Falha ao registrar o usuário: ${error.message}`);
  }
}

// Função para autenticar um usuário
async function authenticateUser(email, password) {
  try {
    // Verifique se o usuário está registrado
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Email não encontrado. Por favor, registre-se.');
    }

    // Verifique se a senha fornecida corresponde à senha armazenada no banco de dados
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Senha incorreta. Por favor, tente novamente.');
    }

    // Crie um token JWT (JSON Web Token) para o usuário autenticado
    const token = jwt.sign({ userId: user._id }, 'seu_segredo_aqui');

    // Retorne o token e as informações do usuário
    return { token, userId: user._id, email: user.email };
  } catch (error) {
    throw new Error(`Falha na autenticação do usuário: ${error.message}`);
  }
}

module.exports = {
  registerUser,
  authenticateUser,
};
