import React from 'react';

function HomePage(props) {
  const { username } = props.location.state;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Olá, {username}!</p>
    </div>
  );
}

export default HomePage;
