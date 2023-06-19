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
            <p> Basta criar um nome de usuário, uma senha e inserir um e-mail válido ao lado.</p><br></br>
          </div>
        </div>
        <div className="right-section">
          <SignUpForm />
        </div>
      </div>
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>antonny.victor.silva@poli.ufrj.br&nbsp;|&nbsp;bernardoocunha@poli.ufrj.br&nbsp;|&nbsp;fredeci@poli.ufrj.br&nbsp;|&nbsp;wpfaltz@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default SignUpPage;
