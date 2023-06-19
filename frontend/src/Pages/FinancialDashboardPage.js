import React, { useState } from 'react';
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
      history.push({
        pathname: '/FinancialDashboardPage',
        state: { name: name, email: email, userId: userId }
      });
    } catch (error) {
      alert(error);
    }
  };  

  return (
    <div>
      <header className="header">Dashboard</header>
      <div className='container'>
        <label htmlFor="startDate">Start Date&nbsp;&nbsp;:</label>
        <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
        <label htmlFor="endDate">End Date:&nbsp;&nbsp;</label>
        <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
        <button onClick={handleViewData} className='button'>View Data</button>
      </div><br></br>
      {financialData.length > 0 && (
        <div>
          <h2 className='h2'>Financial Data:</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {financialData.map((data) => (
                <tr key={data.date}>
                  <td>{data.date}</td>
                  <td>{data.type}</td>
                  <td>{data.name}</td>
                  <td>{data.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>     
      )}
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>antonny.victor.silva@poli.ufrj.br</p>
        <p>bernardoocunha@poli.ufrj.br</p>
        <p>fredeci@poli.ufrj.br</p>
        <p>wpfaltz@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default FinancialDashboardPage;
