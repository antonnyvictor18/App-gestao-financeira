import React, { useState } from 'react';

import { authenticateUser } from '../../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Chamar a função de login do serviço de autenticação
      const loggedIn = await authenticateUser(username, password);

      if (loggedIn) {
        // Login bem-sucedido, redirecionar para a página principal
        // ou executar qualquer outra ação necessária
      } else {
        // Exibir uma mensagem de erro ou tomar alguma ação em caso de falha no login
      }
    } catch (error) {
      // Lidar com erros de autenticação, como erros de conexão com o servidor
      console.error('Erro de autenticação:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Usuário:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite seu usuário"
      />

      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
      />

      <button type="submit">Entrar</button>
    </form>
  );
};


export default Login;
