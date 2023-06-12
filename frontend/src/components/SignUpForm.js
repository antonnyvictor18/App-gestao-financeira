import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../services/authService';


const SignUpForm = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        // Call the registerUser function to register the user
        await registerUser(username, password);
        // Redirect to the login page after successful signup
        history.push('/login');
      } catch (error) {
        // Display an error message if the registration fails
        alert(error);
      }
    };
  
    return (
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form" onSubmit={handleSignup}>
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
          <button className="button" type="submit">Registrar</button>
        </form>
      </div>
    );
  };
  
  export default SignUpForm;
  