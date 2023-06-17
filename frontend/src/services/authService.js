import axios from 'axios';

export const authenticateUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      body: JSON.stringify({email, password }),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    });

    console.log('Resposta recebida do backend: ', response);
    if (response.ok) {
      const userData = await response.json();
      console.log('Dados recebidos pelo backend: ', userData);
    
      // Verifica se a autenticação foi aprovada
      if (userData.authenticated) {
        console.log('Autenticação aprovada. enviando: ', userData);
        return userData;
        // Faça algo quando a autenticação for aprovada
      } else {
        console.log('Autenticação falhou:', userData.message);
        return userData;
      }
    } else {
      console.log('Erro na requisição:', response.status);
      throw new Error('Erro na requisição: ' + response.status);
      // Trate o erro de requisição conforme necessário
    }

  } catch (error) {
    return { authenticated: false, message: error.message };
  }
};


export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    });

    console.log('response: ', response);
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    throw new Error('Erro ao fazer o cadastro: ' + error.message);
  }
};


export const logout = async () => {
  try {
    const response = await axios.post('http://localhost:5000/auth/logout');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao fazer logout: ' + error.message);
  }
};
