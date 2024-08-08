import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/transactionContext';

function AddTransaction() {
  const { setTransactions } = useContext(TransactionContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type: amount >= 0 ? 'Income' : 'Expense',
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
