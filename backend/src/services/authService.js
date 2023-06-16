// authService.js

// Importe os módulos ou dependências necessárias
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Função para registrar um novo usuário
async function registerUser(userData) {
  try {
    console.log('Dados recebidos: ', userData);
    // Verifique se o usuário já está registrado
    const existingUser = await User.findOne({ email: userData.email });
    console.log('Usuário já registrado ? ', existingUser);
    if (existingUser) {
      throw new Error('Este email já está registrado. Por favor, faça login.');
    }

    // Criptografe a senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Crie um novo objeto de usuário com os dados fornecidos
    const newUser = new User({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      // Outros campos de dados pessoais, se necessário
    });

    // Salve o novo usuário no banco de dados
    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    throw new Error(`Falha ao registrar usuário: ${error.message}`);
  }
}

// Função para autenticar um usuário
async function authenticateUser(body) {
    // Verifique se o usuário está registrado
    const user = await User.findOne({email: body.email});
    if (!user) {
      console.log('Usuário não registrado');
      return false
    }

    // Verifique se a senha fornecida corresponde à senha armazenada no banco de dados
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Senha incorreta');
    }

    // Crie um token JWT (JSON Web Token) para o usuário autenticado
    const token = jwt.sign({ userId: user._id }, 'seu_segredo_aqui');

    // Retorne o token e as informações do usuário
    //return { token, userId: user._id, email: user.email };
    return true;
  
}

module.exports = {
  registerUser,
  authenticateUser,
};
