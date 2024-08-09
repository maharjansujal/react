import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigationBar}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <Link to="/" className={styles.navigationLink}>Home</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/add-transaction" className={styles.navigationLink}>Add Transaction</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/transactions" className={styles.navigationLink}>Transactions</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/reports" className={styles.navigationLink}>Reports</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/settings" className={styles.navigationLink}>Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;