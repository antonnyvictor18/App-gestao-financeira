// app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const connectDatabase = require('./utils/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Conecte ao banco de dados
// connectDatabase();

const mongoose = require('mongoose');

// Função para conectar ao banco de dados

try {
  // URL de conexão com o banco de dados
  const dbURL = 'mongodb://mongodb:27017/financeApp';

  // Opções de configuração do Mongoose
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Conecte ao banco de dados
  mongoose.connect(dbURL, options);
  

  console.log('Conexão com o banco de dados estabelecida com sucesso!');
} catch (error) {
  console.error(`Falha ao conectar ao banco de dados: ${error.message}`);
}


// Inicialize o aplicativo Express
const app = express();

// Enable CORS
app.use(cors(
  {origin:"http://localhost:3000",
      credentials:true,
      allowHeaders:"Content-Type"
  }
  ));

// Middleware de autenticação para as rotas subsequentes
// Coloque esse middleware antes das rotas protegidas
// caso queira que as rotas protegidas exijam autenticação
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Handle CORB issue
app.use(function(req, res, next) {
  res.set('X-Content-Type-Options', 'nosniff');
  next();
});

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rotas relacionadas à autenticação
app.use('/auth', authRoutes);

// Rotas relacionadas aos usuários
app.use('/users', userRoutes);

// Rotas relacionadas aos relatórios
app.use('/reports', reportRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API em execução');
});

// Porta em que o servidor irá escutar
const port = 5000;

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});