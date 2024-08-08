import { useContext } from 'react';
import { TransactionContext } from '../context/transactionContext';

export const useTransactions = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  return { transactions, addTransaction };
};
