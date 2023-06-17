import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../services/authService';


const SignUpForm = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        // Call the registerUser function to register the user
        const response = await registerUser(name, email, password);
        console.log(response);
        // Redirect to the login page after successful signup
        history.push('/');
      } catch (error) {
        // Display an error message if the registration fails
        alert(error);
      }
    };
  
    return (
      <div className="container">
        <h2>Cadastro</h2><br></br>
        <form className="form" onSubmit={handleSignup}>
        <div>
            <label htmlFor="name">Nome do Usuário:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        </div>
        
        <div>
            <label htmlFor="email">Email:</label>
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
          <button className="button" type="submit">Registrar</button>
        </form>
      </div>
    );
  };
  
  export default SignUpForm;
  