import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/transactionContext';
import styles from '../styles/transactionList.module.css'; // Ensure this path is correct

function TransactionList() {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [editTransactionId, setEditTransactionId] = useState(null);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleEdit = (transaction) => {
    setEditTransactionId(transaction.id);
    setDescription(transaction.description);
    setAmount(transaction.amount);
  };

  const handleUpdate = () => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === editTransactionId) {
        return { ...transaction, description, amount: parseFloat(amount) };
      }
      return transaction;
    });
    setTransactions(updatedTransactions);
    setEditTransactionId(null);
    setDescription('');
    setAmount('');
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className={styles.transactionListContainer}>
      <h2>Transaction List</h2>
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount}</td>
              <td>
                <button
                  className={styles.editButton}
                  onClick={() => handleEdit(transaction)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(transaction.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editTransactionId && (
        <div className={styles.editForm}>
          <h3>Edit Transaction</h3>
          <input
            className={styles.editInput}
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className={styles.editInput}
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className={styles.updateButton} onClick={handleUpdate}>
            Update Transaction
          </button>
        </div>
      )}
    </div>
  );
}

export default TransactionList;
