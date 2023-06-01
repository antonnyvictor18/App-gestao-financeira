// Importe os módulos necessários
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const config = require('../config/config');

// Função para registrar um novo usuário
async function registrarUsuario(req, res) {
  try {
    const { email, senha } = req.body;

    // Verifique se o usuário já está registrado
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'O email já está sendo usado por outro usuário.' });
    }

    // Criptografe a senha do usuário
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Crie um novo usuário no banco de dados
    const novoUsuario = new Usuario({ email, senha: senhaCriptografada });
    await novoUsuario.save();

    res.status(201).json({ mensagem: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ mensagem: 'Ocorreu um erro ao registrar o usuário. Por favor, tente novamente.' });
  }
}

// Função para fazer login
async function fazerLogin(req, res) {
  try {
    const { email, senha } = req.body;

    // Verifique se o usuário existe no banco de dados
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas.' });
    }

    // Verifique se a senha está correta
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas.' });
    }

    // Crie um token de autenticação
    const token = jwt.sign({ userId: usuario._id }, config.jwtSecret);

    res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ mensagem: 'Ocorreu um erro ao fazer login. Por favor, tente novamente.' });
  }
}

module.exports = {
  registrarUsuario,
  fazerLogin
};
