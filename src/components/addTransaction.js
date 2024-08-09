import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/transactionContext';
import styles from '../styles/addTransaction.module.css';

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
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.transactionForm}>
      <h1>Add new transaction</h1>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.transactionInput}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={styles.transactionInput}
      />
      <button type="submit" className={styles.transactionButton}>
        Add Transaction
      </button>
    </form>
  );
}
export default AddTransaction;