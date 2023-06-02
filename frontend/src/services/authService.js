// Simulação de dados de usuários
const users = [
    { id: 1, email: 'user1@example.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' },
  ];
  
  // Função para fazer o login do usuário
  export const login = async (email, password) => {
    try {
      // Simulação de chamada assíncrona para verificar credenciais do usuário
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = users.find((user) => user.email === email && user.password === password);
          if (user) {
            resolve({ success: true, user });
          } else {
            reject(new Error('Credenciais inválidas'));
          }
        }, 1000);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao fazer login');
    }
  };
  
  // Função para fazer o logout do usuário
  export const logout = async () => {
    try {
      // Simulação de chamada assíncrona para fazer o logout
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 500);
      });
  
      return response;
    } catch (error) {
      throw new Error('Erro ao fazer logout');
    }
  };
  