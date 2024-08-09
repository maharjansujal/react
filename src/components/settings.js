import React, { useState } from 'react';
import styles from '../styles/settings.module.css';

function Settings() {
  const [currency, setCurrency] = useState('USD');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSaveSettings = () => {
    alert(`Settings Saved:\nCurrency: ${currency}\nTheme: ${theme}\nLanguage: ${language}`);
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Settings</h2>
      <div className={styles.settingsGroup}>
        <label htmlFor="currency">Currency:</label>
        <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="INR">INR (₹)</option>
        </select>
      </div>
      <div className={styles.settingsGroup}>
        <label htmlFor="theme">Theme:</label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className={styles.settingsGroup}>
        <label htmlFor="language">Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
}

export default Settings;
