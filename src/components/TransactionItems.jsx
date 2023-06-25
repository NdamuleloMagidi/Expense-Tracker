import React from 'react';

const TransactionItems = ({ category, description, amount }) => {
  return (
    <li className="transaction-items">
      <div className="transaction-category">{category}</div>
      <div className="transaction-description">{description}</div>
      <div className="transaction-amount">{amount}</div>
    </li>
  );
};

export default TransactionItems;
