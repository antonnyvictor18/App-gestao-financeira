import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { registerExpenseIncome } from '../services/expenseIncomeService';

function RegisterValuesPage(props) {
  const history = useHistory();
  const { name } = props.location.state;
  const { email } = props.location.state;
  const { userId } = props.location.state;
  const [tableName, setTableName] = useState('');
  const [rows, setRows] = useState([{ id: 1, date: '', type: 'Ganho', name: '', amount: '', frequency: '1'}]);

  const handleTableNameChange = (e) => {
    setTableName(e.target.value);
  };

  const handleRowValueChange = (id, property, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [property]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      date: '',
      type: 'Ganho',
      name: '',
      amount: '',
      frequency: '1',
    };
    setRows([...rows, newRow]);
  };

  const removeRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleRegisterExpenseIncome = async (e) => {
    e.preventDefault();
    try {
      console.log("Email " + email);
      const expenseData = {
        email: email,
        rows: rows,
      };
      const response = await registerExpenseIncome(expenseData);
      console.log(response);
      history.push({
        pathname: '/FinancialDashboardPage',
        state: { name: name, email: email, userId: userId}
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <header className="header">Gestão de Finanças Pessoais</header>
      <div className="container">
        <h1 className="h1">Registre os Ganhos e Despesas</h1>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Periodicidade</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    className="table-input"
                    type="date"
                    value={row.date}
                    onChange={(e) => handleRowValueChange(row.id, 'date', e.target.value)}
                  />
                </td>
                <td>
                  <select
                    className="table-input"
                    value={row.type}
                    onChange={(e) => handleRowValueChange(row.id, 'type', e.target.value)}
                  >
                    <option value="Ganho">Ganho</option>
                    <option value="Despesa">Despesa</option>
                  </select>
                </td>
                <td>
                  <input
                    className="table-input"
                    type="text"
                    value={row.name}
                    onChange={(e) => handleRowValueChange(row.id, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    type="text"
                    value={row.amount}
                    onChange={(e) => handleRowValueChange(row.id, 'amount', e.target.value)}
                  />
                </td>
                <td>
                  <select
                    className="table-input"
                    value={row.frequency}
                    onChange={(e) => handleRowValueChange(row.id, 'frequency', e.target.value)}
                  >
                    <option value="1">Uma vez só</option>
                    <option value="1w">Uma vez na semana</option>
                    <option value="1m">Uma vez no mês</option>
                  </select>
                </td>
                <td>
                  <button className="button" onClick={() => removeRow(row.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button className="button" onClick={addRow}>
          Adicionar Linha
        </button>
        <button className="button" onClick={handleRegisterExpenseIncome}>
          Enviar
        </button>
      </div>
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>antonny.victor.silva@poli.ufrj.br</p>
        <p>bernardoocunha@poli.ufrj.br</p>
        <p>fredeci@poli.ufrj.br</p>
        <p>wpfaltz@poli.ufrj.br</p>
      </footer>
    </div>
  );
}

export default RegisterValuesPage;
