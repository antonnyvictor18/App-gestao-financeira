import axios from 'axios';

export const authenticateUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao fazer login: ' + error.message);
  }
};


export const registerUser = async (email, password) => {
  // try {
    const response = await fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);
    return data;
  // } catch (error) {
  //   throw new Error('Erro ao fazer o cadastro: ' + error.message);
  // }
};


export const logout = async () => {
  try {
    const response = await axios.post('http://localhost:5000/auth/logout');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao fazer logout: ' + error.message);
  }
};
