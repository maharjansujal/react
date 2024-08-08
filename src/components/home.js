// src/components/Home.js
import React, { useContext } from 'react';
import { TransactionContext } from '../context/transactionContext';

function Home() {
  const { transactions } = useContext(TransactionContext);

  const totalIncome = transactions
    .filter(t => t.type === 'Income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'Expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalSavings = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Total Income: ${totalIncome}</h3>
        <h3>Total Expenses: ${totalExpenses}</h3>
        <h3>Total Savings: ${totalSavings}</h3>
      </div>
    </div>
  );
}

export default Home;
