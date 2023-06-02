// Simulação de dados de usuários
const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password123' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: 'password456' },
  ];
  
  // Função para obter os dados de um usuário pelo email
  export const getUserByEmail = async (email) => {
    try {
      // Simulação de chamada assíncrona para obter o usuário
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = users.find((user) => user.email === email);
          if (user) {
            resolve(user);
          } else {
            reject(new Error('Usuário não encontrado'));
          }
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao obter o usuário');
    }
  };
  
  // Função para obter os dados de um usuário pelo ID
  export const getUserById = async (userId) => {
    try {
      // Simulação de chamada assíncrona para obter o usuário
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = users.find((user) => user.id === userId);
          if (user) {
            resolve(user);
          } else {
            reject(new Error('Usuário não encontrado'));
          }
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao obter o usuário');
    }
  };
  
  // Função para atualizar os dados de um usuário
  export const updateUser = async (userId, newData) => {
    try {
      // Simulação de chamada assíncrona para atualizar o usuário
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const userIndex = users.findIndex((user) => user.id === userId);
          if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...newData };
            resolve(users[userIndex]);
          } else {
            reject(new Error('Usuário não encontrado'));
          }
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao atualizar o usuário');
    }
  };
  