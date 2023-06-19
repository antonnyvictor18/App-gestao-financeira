import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import RegisterValuesPage from './Pages/RegisterValuesPage';
import FinancialDashboardPage from './Pages/FinancialDashboardPage';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>  
      <AppRoutes />
    </Router>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  // Define the routes where the NavBar should not be shown
  const excludedRoutes = ['/signup', '/'];

  // Check if the current route is excluded
  const showNavBar = !excludedRoutes.includes(location.pathname);

  return (
    <>
      {showNavBar && <NavBar />}
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/RegisterValuesPage" component={RegisterValuesPage} />
        <Route path="/FinancialDashboardPage" component={FinancialDashboardPage} />
      </Switch>
    </>
  );
};

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={LoginPage} />
//         <Route path="/home"component={HomePage} />
//         <Route path="/signup"component={SignUpPage} />
//         <Route path="/RegisterValuesPage"component={RegisterValuesPage} />
//         <Route path="/FinancialDashboardPage"component={FinancialDashboardPage} />
//       </Switch>
//     </Router>
//   );
// };

export default App;
