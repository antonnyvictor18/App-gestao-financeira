import React, { useState } from 'react';
import { addExpense } from '../../services/expenseService';

const ExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chamar a função de adicionar despesa do serviço
      await addExpense(expenseData);

      // Realizar qualquer ação necessária após adicionar a despesa
    } catch (error) {
      // Lidar com erros ao adicionar a despesa, como erros de validação ou conexão com o servidor
      console.error('Erro ao adicionar a despesa:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={expenseData.description}
        onChange={handleInputChange}
        placeholder="Digite a descrição da despesa"
      />

      <label htmlFor="amount">Valor:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        value={expenseData.amount}
        onChange={handleInputChange}
        placeholder="Digite o valor da despesa"
      />

      <label htmlFor="date">Data:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={expenseData.date}
        onChange={handleInputChange}
        placeholder="Selecione a data da despesa"
      />

      <button type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default ExpenseForm;
