import React from 'react';

const TransactionItem = ({ category, description, amount }) => {
  return (
    <li className="transaction-item">
      <div className="transaction-category">{category}</div>
      <div className="transaction-description">{description}</div>
      <div className="transaction-amount">{amount}</div>
    </li>
  );
};

export default TransactionItem;
