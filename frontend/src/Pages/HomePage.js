import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function HomePage(props) {
  const history = useHistory();
  const { name } = props.location.state;
  const { email } = props.location.state;
  const { userId } = props.location.state;

  const handleClick = () => {
    try {
      history.push({
        pathname: '/RegisterValuesPage',
        state: { name: name, email: email, userId: userId}
      });

    }
  catch (error) {
      alert(error.message);
    }
  };

  const handleClick2 = () => {
    try {
      history.push({
        pathname: '/FinancialDashboardPage',
        state: { name: name, email: email, userId: userId}
      });

    }
  catch (error) {
      alert(error.message);
    }    
  };

  return (
    <div>
      <header className='header'>
        Gestão de Finanças Pessoais
      </header>
      <div className="page-container">
        <div className='container'>
          <h2>Olá, {name}! Tudo bem?</h2><br></br>
          <h3> Gostaria de inserir novas despesas ou novos ganhos?&nbsp;&nbsp;&nbsp;&nbsp;
            <button to="/RegisterValuesPage" className='button' onClick={handleClick}>Cadastre seus Ganhos e Despesas</button>
          </h3><br></br>
          <h3> Gostaria de visualizar seus ganhos e despesas?&nbsp;&nbsp;&nbsp;&nbsp;
            <button to="/FinancialDashboardPage" className='button' onClick={handleClick2}>Acesse aqui seus relatórios</button>
          </h3>
          
        </div>
      </div>
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>antonny.victor.silva@poli.ufrj.br</p>
        <p>bernardoocunha@poli.ufrj.br</p>
        <p>fredeci@poli.ufrj.br</p>
        <p>wpfaltz@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default HomePage;
