import React from 'react';
import { getExpenseIncomes, deleteExpenseIncome } from '../../services/expenseIncomeService';

const ExpenseIncomeList = () => {
  const [expenseIncomes, setExpenseIncomes] = React.useState([]);

  React.useEffect(() => {
    // Function to fetch expense incomes from the service
    const fetchExpenseIncomes = async () => {
      try {
        const expenseIncomesData = await getExpenseIncomes();
        setExpenseIncomes(expenseIncomesData);
      } catch (error) {
        console.error('Error fetching expense incomes:', error);
      }
    };

    fetchExpenseIncomes();
  }, []);

  const handleDelete = async (expenseIncomeId) => {
    try {
      // Call the function to delete the expense income from the service
      await deleteExpenseIncome(expenseIncomeId);

      // Update the expense income list after deletion
      setExpenseIncomes((prevExpenseIncomes) =>
        prevExpenseIncomes.filter((expenseIncome) => expenseIncome.id !== expenseIncomeId)
      );
    } catch (error) {
      console.error('Error deleting expense income:', error);
    }
  };

  return (
    <div>
      <h2>Expense and Income List</h2>
      {expenseIncomes.length === 0 ? (
        <p>No expense or income found.</p>
      ) : (
        <ul>
          {expenseIncomes.map((expenseIncome) => (
            <li key={expenseIncome.id}>
              <p>Tipo: {expenseIncome.tipo}</p>
              <p>Nome: {expenseIncome.nome}</p>
              <p>Valor: {expenseIncome.valor}</p>
              <p>Data: {expenseIncome.data}</p>
              <button onClick={() => handleDelete(expenseIncome.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseIncomeList;
