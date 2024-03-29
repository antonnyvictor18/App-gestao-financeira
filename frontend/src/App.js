import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getUserById} from './services/userDataService';
import { authenticateUser, registerUser } from './services/authService';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import UserProfile from './components/User/UserProfile';
import IncomeForm from './components/Income/IncomeForm';
import IncomeList from './components/Income/IncomeList';
import ExpenseForm from './components/Expense/ExpenseForm';
import ExpenseList from './components/Expense/ExpenseList';
import CreditCardForm from './components/CreditCard/CreditCardForm';
import CreditCardList from './components/CreditCard/CreditCardList';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import RegisterValuesPage from './Pages/RegisterValuesPage';
import FinancialDashboardPage from './Pages/FinancialDashboardPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home"component={HomePage} />
        <Route path="/signup"component={SignUpPage} />
        <Route path="/RegisterValuesPage"component={RegisterValuesPage} />
        <Route path="/FinancialDashboardPage"component={FinancialDashboardPage} />
      </Switch>
    </Router>
  );
};

export default App;
