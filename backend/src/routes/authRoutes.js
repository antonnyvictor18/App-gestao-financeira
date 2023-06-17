const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const AuthService = require('../services/authService');


//Rota de Registro de usuário
//router.post('/register', AuthService.registerUser);

router.post('/register', async(req, res) => {
  // Lógica para lidar com a requisição POST
  console.log('Requisição POST recebida!');
  console.log('URL da requisição:', req.url);
  console.log('Corpo da requisição:', req.body);
  const body = req.body; // O corpo da requisição, contendo os dados enviados pelo cliente
  AuthService.registerUser(body);
  // Faça o processamento necessário com os dados recebidos

  // Envie uma resposta ao cliente
  res.status(200).json({ message: 'Usuário Registrado com sucesso!' });
  res.end();
});

// Rota de login
router.post('/login', async(req, res) => {
  // Lógica para lidar com a requisição POST
  console.log('Requisição POST recebida!');
  console.log('URL da requisição:', req.url);
  console.log('Corpo da requisição:', req.body);
  const body = req.body; // O corpo da requisição, contendo os dados enviados pelo cliente
  aprovada =  await AuthService.authenticateUser(body);

  console.log('aprovada: ', aprovada);
  if(aprovada){
    console.log('Entrou no if');
    res.json({ success: true });
  }
  else {
    // Autenticação falhou
    console.log('Entrou no else');
    res.json({ success: false, message: 'Credenciais inválidas' });
  }
});
// Rota de logout
router.post('/logout', AuthController.logout);

// Add a default error handler for unsupported HTTP methods
//router.all('/register', (req, res) => {
 //   res.status(405).send('Method Not Allowed');
 // });

module.exports = router;
