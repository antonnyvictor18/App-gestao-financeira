import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { authenticateUser, registerUser } from '../services/authService';

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await authenticateUser(email, password);
      // Redirect to the home page after successful login
      history.push({
        pathname: '/home',
        state: { email: email}
      });
    } catch (error) {
      // Display an error message if the credentials are invalid
      alert('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Usuário:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button className="button" type="submit">Entrar</button>
      </form>
      <Link to="/signup" className="signup-button">Cadastre-se</Link>
    </div>
  );
};

export default LoginForm;
