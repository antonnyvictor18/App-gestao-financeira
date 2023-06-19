import React, { useState, useEffect, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getExpenseIncome } from '../services/expenseIncomeService';
import { Chart, LinearScale, CategoryScale, LineController, LineElement, PointElement } from 'chart.js';

Chart.register(LinearScale, CategoryScale, LineController, LineElement, PointElement);

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
  const [showChart, setShowChart] = useState(false);
  const canvasRef = useRef(null);

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
        email: email,
      };
      const response = await getExpenseIncome(data);
      setFinancialData(response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
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

  useEffect(() => {
    const calculateCumulativeSum = () => {
      let cumulativeSum = 0;
      const financialDataWithCumulativeSum = [];

      // Calculate the balance at each date
      financialData.forEach((data) => {
        if (new Date(data.date) <= new Date(endDate)) {
          if (data.type === 'Ganho') {
            cumulativeSum += data.amount;
          } else if (data.type === 'Despesa') {
            cumulativeSum -= data.amount;
          }
          financialDataWithCumulativeSum.push({ ...data, cumulativeSum });
        }
      });

      return financialDataWithCumulativeSum;
    };

    const drawChart = () => {
      if (showChart && financialData.length > 0) {
        const chartData = calculateCumulativeSum();
        const labels = chartData.map((data) => formatDate(new Date(data.date)));
        const values = chartData.map((data) => data.cumulativeSum);

        const ctx = canvasRef.current.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Financial Amount',
                data: values,
                borderColor: 'blue',
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              x: {
                display: true,
              },
              y: {
                display: true,
                beginAtZero: true,
              },
            },
          },
        });
      }
    };

    drawChart();
  }, [financialData, showChart, endDate]);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div>
      <header className="header">Gestão de Finanças Pessoais</header>
      <div className="container">
        <label htmlFor="startDate">Start Date:&nbsp;&nbsp;</label>
        <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} style={{ marginRight: '20px' }} />
        <label htmlFor="endDate">
          End Date:&nbsp;&nbsp;
        </label>
        <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} style={{ marginRight: '20px' }} />
        <button onClick={handleViewData} className="button" style={{ marginRight: '20px' }}>
          Analisar
        </button>
        <button onClick={toggleChart} className="button">
          {showChart ? 'Hide Chart' : 'Show Chart'}
        </button>
      </div>
      <br />
      {financialData.length > 0 && (
        <div>
          <div className="container">
            <h3 className="h3">
              Ganhos:&nbsp;R${totalIncomes}&nbsp;&nbsp;||&nbsp;&nbsp;Gastos:&nbsp;R${totalExpenses}&nbsp;&nbsp;||&nbsp;&nbsp;Saldo:&nbsp;R${totalIncomes - totalExpenses}
            </h3>
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
                    <td>{formatDate(new Date(data.date))}</td>
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
      {showChart && (
        <div className="container">
          <canvas id="chart" ref={canvasRef} width="400" height="200"></canvas>
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
