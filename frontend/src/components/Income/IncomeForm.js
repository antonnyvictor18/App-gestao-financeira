import React, { useState } from 'react';
import { addIncome } from '../../services/incomeService';

const IncomeForm = () => {
  const [incomeData, setIncomeData] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncomeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chamar a função de adicionar renda do serviço
      await addIncome(incomeData);

      // Realizar qualquer ação necessária após adicionar a renda
    } catch (error) {
      // Lidar com erros ao adicionar a renda, como erros de validação ou conexão com o servidor
      console.error('Erro ao adicionar a renda:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={incomeData.description}
        onChange={handleInputChange}
        placeholder="Digite a descrição da renda"
      />

      <label htmlFor="amount">Valor:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={incomeData.amount}
        onChange={handleInputChange}
        placeholder="Digite o valor da renda"
      />

      <label htmlFor="date">Data:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={incomeData.date}
        onChange={handleInputChange}
        placeholder="Selecione a data da renda"
      />

      <button type="submit">Adicionar Renda</button>
    </form>
  );
};

export default IncomeForm;
