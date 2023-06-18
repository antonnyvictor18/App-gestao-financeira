import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ExpenseIncomeForm from '../components/ExpenseIncome/ExpenseIncomeForm';

function ExpenseIncomePage ()  {

  return (
    <div>
      <header className='header'>
        Gestão de Finanças Pessoais
        <nav>
          <ul>
            <li>
              <Link to="/home">Início</Link>
            </li>
            <li>
              <Link to="/ExpenseIncomePage">Registre suas Finanças</Link>
            </li>
          </ul>
        </nav>
      </header>
      <ExpenseIncomeForm/>
      <footer className="footer">
        <p>Contact the Developers:</p>
        <p>bernardoocunha@poli.ufrj.br</p>
      </footer>
    </div>
  );
};

export default ExpenseIncomePage;
