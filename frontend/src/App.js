import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { getUserById} from './services/userDataService';
// import { authenticateUser, registerUser } from './services/authService';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import UserProfile from './components/User/UserProfile';
// import IncomeForm from './components/Income/IncomeForm';
// import IncomeList from './components/Income/IncomeList';
// import ExpenseIncomeForm from './components/ExpenseIncome/ExpenseIncomeForm';
// import ExpenseIncomeList from './components/ExpenseIncome/ExpenseIncomeList';
// import CreditCardForm from './components/CreditCard/CreditCardForm';
// import CreditCardList from './components/CreditCard/CreditCardList';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import ExpenseIncomePage from './Pages/ExpenseIncomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home"component={HomePage} />
        <Route path="/signup"component={SignUpPage} />
        <Route path="/ExpenseIncomePage"component={ExpenseIncomePage} />
      </Switch>
    </Router>
  );
};

export default App;
