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

  return (
    <div>
      <header className='header'>
        Gestão de Finanças Pessoais
      </header>
      <div className="page-container">
        <div className='container'>
          <h2>Olá, {name}! Tudo bem?</h2><br></br>
          <h3> Ainda não se organizou?&nbsp;&nbsp;&nbsp;&nbsp;
            <button to="/RegisterValuesPage" className='button' onClick={handleClick}>Cadastre seus Ganhos e Despesas</button>
          </h3><br></br>
        </div>
      </div>
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>bernardoocunha@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default HomePage;
