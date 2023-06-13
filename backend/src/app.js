// app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDatabase = require('./utils/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Conecte ao banco de dados
connectDatabase();

// Inicialize o aplicativo Express
const app = express();

// Enable CORS
app.use(cors());

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rotas relacionadas à autenticação
app.use('/auth', authRoutes);

// Middleware de autenticação para as rotas subsequentes
// Coloque esse middleware antes das rotas protegidas
// caso queira que as rotas protegidas exijam autenticação
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
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
const port = process.env.PORT || 5000;

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
