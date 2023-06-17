import React from 'react';
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
          <h3>Olá, {name}! Tudo bem?.</h3><br></br>
          <p> Ainda não se organizou? <Link to="/RegisterValuesPage">Cadastre seus Ganhos e Despesas</Link></p><br></br>
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
