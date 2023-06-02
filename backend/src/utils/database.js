// database.js

const mongoose = require('mongoose');

// Função para conectar ao banco de dados
async function connectDatabase() {
  try {
    // URL de conexão com o banco de dados
    const dbURL = 'mongodb://localhost:27017/financeApp';

    // Opções de configuração do Mongoose
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Conecte ao banco de dados
    await mongoose.connect(dbURL, options);
    

    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error(`Falha ao conectar ao banco de dados: ${error.message}`);
  }
}

module.exports = connectDatabase;
