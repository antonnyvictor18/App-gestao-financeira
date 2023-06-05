import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authenticateUser, registerUser } from '../services/authService';



const LoginForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const userData = await authenticateUser(username, password);
        setUser(userData);
        // Redireciona para a página inicial após o login bem-sucedido
        history.push({
            pathname: '/home',
            state: {username: username }
          });
    }
    catch (error) {
      // Exibe uma mensagem de erro caso as credenciais sejam inválidas
      alert('Credenciais inválidas. Por favor, tente novamente.');
    } 
  };


  return (
    <div class="container">
      <h2>Login</h2>
      <form class = "form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button class = "button" type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
