// app.js

const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Conecte ao banco de dados
connectDatabase();

// Inicialize o aplicativo Express
const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rotas relacionadas à autenticação
app.use('/auth', authRoutes);

// Middleware de autenticação para as rotas subsequentes
// Coloque esse middleware antes das rotas protegidas
// caso queira que as rotas protegidas exijam autenticação
app.use((req, res, next) => {
  // Lógica de autenticação aqui
  // Verifique se o usuário está autenticado e faça as verificações necessárias
  // Por exemplo, você pode armazenar um token de autenticação no cabeçalho da requisição e validar esse token
  // Se a autenticação for bem-sucedida, chame next() para prosseguir com as rotas protegidas
  // Caso contrário, retorne uma resposta de erro
  next();
});

// Rotas relacionadas aos usuários
app.use('/users', userRoutes);

// Rotas relacionadas aos relatórios
app.use('/reports', reportRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API em execução');
});

// Porta em que o servidor irá escutar
const port = process.env.PORT || 3000;

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
