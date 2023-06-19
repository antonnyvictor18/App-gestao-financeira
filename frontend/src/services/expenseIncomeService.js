import axios from 'axios';

export const registerExpenseIncome = async (expenseData) => {
  try {
    const response = await fetch('http://localhost:5000/registerExpenseIncome/create', {
      method: 'POST',
      body: JSON.stringify(expenseData),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    });
    console.log('Resposta recebida do backend: ', response);

    if (response.ok) {
      const responseData = await response.json();
      console.log('Dados recebidos pelo backend: ', responseData);
      return responseData;
    } else {
      console.log('Erro na requisição:', response.status);
      throw new Error('Erro na requisição: ' + response.status);
      // Trate o erro de requisição conforme necessário
    }
  } catch (error) {
    return { authenticated: false, message: error.message };
  };
};

export const getExpenseIncome = async (body) => {
  try {
    const response = await fetch('http://localhost:5000/registerExpenseIncome/getData', {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    });
    console.log('Resposta recebida do backend: ', response);

    if (response.status === 200) {
      const responseData = response.data;
      console.log('Dados recebidos pelo backend: ', responseData);
      return responseData;
    } else {
      console.log('Erro na requisição:', response.status);
      throw new Error('Erro na requisição: ' + response.status);
      // Trate o erro de requisição conforme necessário
    }
  } catch (error) {
    return { authenticated: false, message: error.message };
  };
};
