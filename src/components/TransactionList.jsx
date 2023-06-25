import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  return (
    <div className="transactions">
      <h2 className="transactions-title">Transactions</h2>
      <ul className="transaction-list">
        <TransactionItem category="Groceries" description="Bought a few groceries" amount="-R1500" />
        <TransactionItem category="Entertainment" description="Movie tickets" amount="-R300" />
        <TransactionItem category="Biils" description="Electricity Bill" amount="-R400" />
      </ul>
    </div>
  );
};

export default TransactionList;
