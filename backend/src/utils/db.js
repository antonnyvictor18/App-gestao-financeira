const { MongoClient } = require('mongodb');

// URL de conexão com o banco de dados MongoDB
const url = 'mongodb://localhost:27017';

// Nome do banco de dados que você deseja usar
const dbName = 'nome_do_banco_de_dados';

// Função para conectar ao banco de dados MongoDB
async function connectToDatabase() {
  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    return client.db(dbName);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

module.exports = connectToDatabase;
