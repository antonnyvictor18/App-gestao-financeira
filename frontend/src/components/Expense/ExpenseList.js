import React from 'react';
import { getExpenses, deleteExpense } from '../../services/expenseService';

const ExpenseList = () => {
  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    // Função para buscar as despesas do serviço
    const fetchExpenses = async () => {
      try {
        const expensesData = await getExpenses();
        setExpenses(expensesData);
      } catch (error) {
        console.error('Erro ao buscar as despesas:', error);
      }
    };

    fetchExpenses();
  }, []);

  const handleDelete = async (expenseId) => {
    try {
      // Chamar a função para excluir a despesa do serviço
      await deleteExpense(expenseId);

      // Atualizar a lista de despesas após a exclusão
      setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
    } catch (error) {
      console.error('Erro ao excluir a despesa:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Despesas</h2>
      {expenses.length === 0 ? (
        <p>Nenhuma despesa encontrada.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <p>Descrição: {expense.description}</p>
              <p>Valor: {expense.amount}</p>
              <p>Data: {expense.date}</p>
              <button onClick={() => handleDelete(expense.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
