import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getExpenseIncome } from '../services/expenseIncomeService';

const FinancialDashboardPage = (props) => {
  const history = useHistory();
  const { name } = props.location.state;
  const { email } = props.location.state;
  const { userId } = props.location.state;
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [financialData, setFinancialData] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleViewData = async (e) => {
    e.preventDefault();
    try {
      const data = {
        startDate: startDate,
        endDate: endDate,
        email: email
      }
      const response = await getExpenseIncome(data);
      setFinancialData(response); // Update the financialData state with the response data
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    // Calculate total incomes and expenses when financialData changes
    const calculateTotals = () => {
      let incomes = 0;
      let expenses = 0;

      financialData.forEach((data) => {
        if (data.type === 'Ganho') {
          incomes += data.amount;
        } else if (data.type === 'Despesa') {
          expenses += data.amount;
        }
      });

      setTotalIncomes(incomes);
      setTotalExpenses(expenses);
    };

    calculateTotals();
  }, [financialData]);

  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(date).toLocaleDateString(undefined, options);
    return formattedDate;
  }

  return (
    <div>
      <header className="header">Gestão de Finanças Pessoais</header>
      <div className="container">
        <label htmlFor="startDate">Start Date:&nbsp;&nbsp;</label>
        <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} style={{ marginRight: '20px' }} />
        <label htmlFor="endDate">End Date:&nbsp;&nbsp;</label>
        <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} style={{ marginRight: '20px' }}/>
        <button onClick={handleViewData} className="button">
          Analisar
        </button>
      </div>
      {financialData.length > 0 && (
        <div>
          <div className="container">
            <h3 className="h3">Ganhos:&nbsp;R${totalIncomes}&nbsp;&nbsp;||&nbsp;&nbsp;Gastos:&nbsp;R${totalExpenses}&nbsp;&nbsp;||&nbsp;&nbsp;Saldo:&nbsp;R${totalIncomes - totalExpenses}</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Tipo</th>
                  <th>Nome</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((data) => (
                  <tr key={data.date}>
                    <td>{formatDate(data.date)}</td>
                    <td>{data.type}</td>
                    <td>{data.name}</td>
                    <td>{data.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>antonny.victor.silva@poli.ufrj.br&nbsp;|&nbsp;bernardoocunha@poli.ufrj.br&nbsp;|&nbsp;fredeci@poli.ufrj.br&nbsp;|&nbsp;wpfaltz@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default FinancialDashboardPage;
