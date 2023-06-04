// Simulação de dados de usuários

  // Função para fazer o login do usuário
  export const authenticateUser = async (email, password) => {
    try {
      // Simulação de chamada assíncrona para verificar credenciais do usuário
      const response = await axios.get('http://localhost:5000/auth/login'); 
      return response.data;
    } catch (error) {
      throw new Error('Erro ao fazer login');
    }
  };

  export const registerUser = async (email, password) => {
    try {
      // Simulação de chamada assíncrona para verificar credenciais do usuário
      const response = await axios.get('http://localhost:5000/auth/register'); 
      return response.data;
    } catch (error) {
      throw new Error('Erro ao fazer o cadastramento');
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
  