import React, { useContext } from 'react';
import { TransactionContext } from '../context/transactionContext';

function TransactionList() {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount} ({transaction.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
