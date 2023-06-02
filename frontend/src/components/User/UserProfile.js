import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Idade: {user.age}</p>
      {/* Exiba mais informações do perfil do usuário conforme necessário */}
    </div>
  );
};

export default UserProfile;
