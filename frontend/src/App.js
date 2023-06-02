import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getUserById } from './services/userDataService';
import { getReports } from './services/reportService';
import { authenticateUser } from './services/authService';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import UserProfile from './components/User/UserProfile';
import IncomeForm from './components/Income/IncomeForm';
import IncomeList from './components/Income/IncomeList';
import ExpenseForm from './components/Expense/ExpenseForm';
import ExpenseList from './components/Expense/ExpenseList';
import CreditCardForm from './components/CreditCard/CreditCardForm';
import CreditCardList from './components/CreditCard/CreditCardList';
import ReportChart from './components/Report/ReportChart';
import ReportSuggestions from './components/Report/ReportSuggestions';

const App = () => {
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = 1; // Altere o ID do usuário conforme necessário
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (error) {
        console.error('Erro ao obter os dados do usuário', error);
      }
    };

    const fetchReports = async () => {
      try {
        const userId = 1; // Altere o ID do usuário conforme necessário
        const userReports = await getReports(userId);
        setReports(userReports);
      } catch (error) {
        console.error('Erro ao obter os relatórios', error);
      }
    };

    fetchUser();
    fetchReports();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const userData = await authenticateUser(email, password);
      setUser(userData);
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? (
            <UserProfile user={user} onLogout={handleLogout} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/income">
          <IncomeForm />
          <IncomeList />
        </Route>
        <Route path="/expense">
          <ExpenseForm />
          <ExpenseList />
        </Route>
        <Route path="/credit-card">
          <CreditCardForm />
          <CreditCardList />
        </Route>
        <Route path="/report">
          <ReportChart reports={reports} />
          <ReportSuggestions />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
