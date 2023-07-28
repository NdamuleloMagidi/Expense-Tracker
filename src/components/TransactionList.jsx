import React, { useState } from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!category || !description || !amount) {
      // Handle form validation error, if required fields are not filled
      return;
    }

    const newTransaction = {
      category,
      description,
      amount
    };

    setTransactions([...transactions, newTransaction]);
    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    <div className="transactions">
      <h2 className="transactions-title">Transactions</h2>

      <form className="transaction-form" onSubmit={handleAddTransaction}>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Amount:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <button type="submit">Add Transaction</button>
      </form>

      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} category={transaction.category} description={transaction.description} amount={transaction.amount} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
