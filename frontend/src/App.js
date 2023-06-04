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

const App = () => {
  const [user, setUser] = useState(null);
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

    fetchUser();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const userData = await authenticateUser(email, password);
      setUser(userData);
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  const handleSignup = async (email, password) => {
    try {
      const userData = await registerUser(email, password);
      setUser(userData);
    } catch (error) {
      console.error('Erro ao registrar usuário', error);
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
          <Signup onSignup={handleSignup} />
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
      </Switch>
    </Router>
  );
};

export default App;
