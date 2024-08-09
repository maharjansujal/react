// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import AddTransaction from './components/addTransaction';
import TransactionList from './components/transactionList';
import Reports from './components/reports';
import Settings from './components/settings';
import Navigation from './components/navigation';
import { TransactionProvider } from './context/transactionContext';

function App() {
  return (
    <TransactionProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-transaction" element={<AddTransaction />} />
            <Route path="/transactions" element={<TransactionList />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </TransactionProvider>
  );
}

export default App;
