import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={{ pathname: '/home', state: { name: props.name, email: props.email, userId: props.userId } }}>Home</Link>
        </li>
        <li>
          <Link to={{ pathname: '/RegisterValuesPage', state: { name: props.name, email: props.email, userId: props.userId } }}>Register Values</Link>
        </li>
        <li>
          <Link to={{ pathname: '/FinancialDashboardPage', state: { name: props.name, email: props.email, userId: props.userId } }}>Financial Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
