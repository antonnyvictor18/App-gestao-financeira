import React from 'react';
import LoginForm from '../components/LoginForm';
import { useHistory, Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <header className='header'>
        Gestão de Finanças Pessoais
      </header>
      <div className="page-container">
        <div className="left-section">
          <div className='container'>
            <h3>Bem vindo ao GFP, sua plataforma para manter as contas em dia.</h3><br></br>
            <p> Neste plataforma, é possível realizar o controle dos seus gastos e ganhos
              de forma a manter seu balanço sempre positivo</p><br></br>
            <p>Além disso, o site conta com um auxiliador de investimentos, que te ajuda a 
              fazer seu dinheiro render e manter seu poder de compra!</p><br></br>
            <p>Tudo isso pode ser feito de forma fácil e gratuita! Vamos começar.</p><br></br>
          </div>
        </div>
        <div className="right-section">
          <LoginForm />
        </div>
      </div>
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>bernardoocunha@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default LoginPage;
