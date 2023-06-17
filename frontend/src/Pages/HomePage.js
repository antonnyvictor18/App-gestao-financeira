import React from 'react';
import { useHistory} from 'react-router-dom';

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
      <h1>Home Page</h1>
      <p>Olá, {name}! Tudo bem ?</p>
      
      <div>
          <br></br>
          <p>
          Ainda não se organizou?{' '}
          <button className="signup-button" onClick={handleClick}>
        Cadastre suas finanças
          </button>
          </p>
        </div>
    </div>

  );
}

export default HomePage;
