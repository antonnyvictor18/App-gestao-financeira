import React from 'react';

const ReportSuggestions = ({ suggestions }) => {
  return (
    <div>
      <h2>Sugestões de Relatórios</h2>
      {suggestions.length === 0 ? (
        <p>Nenhuma sugestão disponível no momento.</p>
      ) : (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportSuggestions;
