import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Transactions</Link>
        </li>
        <li>
          <Link to="/My-personal-details">My Personal Details</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

