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
      console.log('userData recebido pelo authservice do front: ', userData);
      if (!userData.authenticated) {
        console.log('Autenticação falhou:', userData.message);
        throw new Error(userData.message);
      }
      console.log('Autenticação aprovada. enviando: ', userData, ' para o home');
      // Redirect to the home page after successful login
      history.push({
        pathname: '/home',
        state: {
          name: userData.name,
          userId: userData.userId, 
          email: userData.email,
        }
      });
     
    }
  catch (error) {
      // Display an error message if the credentials are invalid
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2><br></br>
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
        <div>
          <br></br>
          <p>
            Ainda não tem conta? <Link to="/signup" className="signup-button">Cadastre-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
