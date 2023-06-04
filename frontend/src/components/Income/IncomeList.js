import React, { useEffect, useState } from 'react';
import { getIncomes, deleteIncome } from '../../services/incomeService';

const IncomeList = () => {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    const fetchIncomes = async () => {
      try {
        const incomesData = await getIncomes();
        setIncomes(incomesData);
      } catch (error) {
        console.error('Erro ao buscar as receitas:', error);
      }
    };

    fetchIncomes();
  }, []);

  const handleDelete = async (incomeId) => {
    try {
      await deleteIncome(incomeId);
      setIncomes((prevIncomes) => prevIncomes.filter((income) => income.id !== incomeId));
    } catch (error) {
      console.error('Erro ao excluir a receita:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Receitas</h2>
      {incomes.length === 0 ? (
        <p>Nenhuma receita encontrada.</p>
      ) : (
        <ul>
          {incomes.map((income) => (
            <li key={income.id}>
              <p>Descrição: {income.description}</p>
              <p>Valor: {income.amount}</p>
              <p>Data: {income.date}</p>
              <button onClick={() => handleDelete(income.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IncomeList;
