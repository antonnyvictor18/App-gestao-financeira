const BASE_URL = 'http://localhost:3000/api'; // URL base da sua API

// Função para fazer uma requisição GET
export const get = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Erro ao fazer a requisição');
  }
};

// Função para fazer uma requisição POST
export const post = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Erro ao fazer a requisição');
  }
};

// Função para fazer uma requisição DELETE
export const del = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Erro ao fazer a requisição');
  }
};
