import React, { useState } from 'react';


function RegisterValuesPage (props)  {
  const { name } = props.location.state;
  const { email } = props.location.state;
  const { userId } = props.location.state;
  const [tableName, setTableName] = useState('');
  const [rows, setRows] = useState([{ id: 1, value: '' }]);

  const handleTableNameChange = (e) => {
    setTableName(e.target.value);
  };

  const handleRowValueChange = (id, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      value: ''
    };
    setRows([...rows, newRow]);
  };

  const removeRow = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const registerTable = () => {
    // Send the data to the backend for database storage
    const data = {
      tableName,
      rows
    };
    // Send the data to the backend using an API call (e.g., fetch or Axios)
    // Example using fetch:
    fetch('/api/registerTable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the backend if needed
        console.log(result);
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
      });
  };

  return (
    <div>
      <header className='header'>
        Gestão de Finanças Pessoais
      </header>
      <div className='container'>
        <h1 className='h1'>Registre os Ganhos e Despesas</h1><br></br>
        <table className='table'>
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Nome</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="date"
                    value={row.date}
                    onChange={(e) => handleRowValueChange(row.id, 'date', e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={row.type}
                    onChange={(e) => handleRowValueChange(row.id, 'type', e.target.value)}
                  >
                    <option value="Ganho">Ganho</option>
                    <option value="Despesa">Despesa</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    value={row.text}
                    onChange={(e) => handleRowValueChange(row.id, 'text', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.text}
                    onChange={(e) => handleRowValueChange(row.id, 'text', e.target.value)}
                  />
                </td>
                <td>
                  <button className='button' onClick={() => removeRow(row.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>  
        </table>
        <br></br>
        <button className='button' onClick={addRow}>Add Row</button>
        <button className='button' onClick={registerTable}>Register Table</button>
      </div>
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>bernardoocunha@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default RegisterValuesPage;
