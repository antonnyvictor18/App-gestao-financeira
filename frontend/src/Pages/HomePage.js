import React from 'react';

function HomePage(props) {
  const { email } = props.location.state;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Olá, {email}!</p>
    </div>
  );
}

export default HomePage;
