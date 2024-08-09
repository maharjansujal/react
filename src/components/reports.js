import React, { useContext } from 'react';
import { TransactionContext } from '../context/transactionContext';
import styles from '../styles/report.module.css';

function Reports() {
  const { transactions } = useContext(TransactionContext);

  const totalIncome = transactions
    .filter(t => t.type === 'Income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'Expense')
    .reduce((acc, t) => acc + Math.abs(t.amount), 0); // Using Math.abs

  const totalSavings = totalIncome - totalExpenses;

  return (
    <div className={styles.reportContainer}>
      <h2 className={styles.title}>Financial Report</h2>
      <div className={styles.summaryCards}>
        <div className={styles.card}>
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div className={styles.card}>
          <h3>Total Expenses</h3>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div className={styles.card}>
          <h3>Total Savings</h3>
          <p>${totalSavings.toFixed(2)}</p>
        </div>
      </div>
      <h3 className={styles.transactionTitle}>Transaction List</h3>
      {transactions.length > 0 ? (
        <ul className={styles.transactionList}>
          {transactions.map(transaction => (
            <li key={transaction.id} className={styles.transactionItem}>
              {transaction.description}: {transaction.type === 'Expense' ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noTransactions}>No transactions available.</p>
      )}
    </div>
  );
}

export default Reports;
