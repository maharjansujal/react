// src/components/Reports.js
import React, { useContext } from 'react';
import { TransactionContext } from '../context/transactionContext';

function Reports() {
  const { transactions } = useContext(TransactionContext);

  const totalIncome = transactions
    .filter(t => t.type === 'Income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'Expense')
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div>
      <h2>Reports</h2>
      <div>
        <h3>Total Income: ${totalIncome}</h3>
        <h3>Total Expenses: ${totalExpenses}</h3>
        <h3>Net Balance: ${totalIncome - totalExpenses}</h3>
      </div>
    </div>
  );
}

export default Reports;
