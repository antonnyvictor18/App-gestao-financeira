import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { useHistory, Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <header className='header'>
        Gestão de Finanças Pessoais
      </header>
      <div className="page-container">
        <div className="left-section">
          <div className='container'>
            <h3>Cadastre-se de forma fácil, rápida e segura.</h3><br></br>
            <p> Basta fazê-lo com um email e senha</p><br></br>
          </div>
        </div>
        <div className="right-section">
          <SignUpForm />
        </div>
      </div>
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>bernardoocunha@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default SignUpPage;
