import React, { useContext, useMemo } from 'react';
import { TransactionContext } from '../context/transactionContext';
import Header from '../components/header';
import styles from '../styles/home.module.css';

function Home() {
  const { transactions } = useContext(TransactionContext);

  const totalIncome = useMemo(() => 
    transactions
      .filter(t => t.type === 'Income')
      .reduce((acc, t) => acc + t.amount, 0), 
    [transactions]
  );

  const totalExpenses = useMemo(() => 
    transactions
      .filter(t => t.type === 'Expense')
      .reduce((acc, t) => acc + Math.abs(t.amount), 0), 
    [transactions]
  );

  const totalSavings = useMemo(() => 
    totalIncome - totalExpenses, 
    [totalIncome, totalExpenses]
  );

  const financialTips = [
    "Create a Budget: Establish a monthly budget to track your income and expenses.",
    "Save for Emergencies: Aim to save at least 3-6 months' worth of living expenses.",
    "Pay Off High-Interest Debt: Focus on paying off high-interest debts first.",
    "Invest Early: The earlier you start investing, the more time your money has to grow.",
    "Track Your Spending: Regularly monitor your spending habits to identify unnecessary purchases.",
    "Set Financial Goals: Define short-term and long-term financial goals to stay motivated.",
    "Shop Smart: Look for sales and use coupons to save money on purchases.",
    "Automate Savings: Set up automatic transfers to your savings account.",
    "Educate Yourself: Learn about personal finance through books and courses.",
    "Review Your Subscriptions: Cancel subscriptions you no longer use to save money."
  ];
  return (
    <div className={styles.container}>
      <Header />
      <h2 className={styles.dashboardTitle}>Dashboard</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Total Income</h3>
          <p className={styles.cardAmount}>${totalIncome}</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Total Expenses</h3>
          <p className={styles.cardAmount}>${totalExpenses}</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Total Savings</h3>
          <p className={styles.cardAmount}>${totalSavings}</p>
        </div>
      </div>
      <div className={styles.homeContainer}>
      <div className={styles.tipsSection}>
        <h2>Financial Tips</h2>
        <ul className={styles.tipsList}>
          {financialTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Home;
