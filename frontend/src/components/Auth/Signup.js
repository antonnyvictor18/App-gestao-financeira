import React, { useState } from 'react';
import { registerUser} from '../../services/authService';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Chamar a função de registro do serviço de autenticação
      const registered = await registerUser(username, password, email);

      if (registered) {
        // Registro bem-sucedido, redirecionar para a página de login
        // ou executar qualquer outra ação necessária
      } else {
        // Exibir uma mensagem de erro ou tomar alguma ação em caso de falha no registro
      }
    } catch (error) {
      // Lidar com erros de registro, como erros de conexão com o servidor
      console.error('Erro de registro:', error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
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

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Signup;
