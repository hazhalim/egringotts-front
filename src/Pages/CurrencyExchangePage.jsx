// CurrencyExchangePage.jsx

import React, { useState } from 'react';
import './CurrencyExchangePage.css';

const CurrencyExchangePage = () => {
  // Dummy data for select options and exchange rates
  const [accounts] = useState(['USD', 'EUR', 'GBP']);
  const [exchangeRates] = useState({
    USD: { EUR: 0.82, GBP: 0.72 },
    EUR: { USD: 1.22, GBP: 0.88 },
    GBP: { USD: 1.39, EUR: 1.13 }
  });
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Function to handle currency conversion
  const handleConversion = () => {
    const exchangeRate = exchangeRates[selectedAccount][targetAccount];
    const converted = amount * exchangeRate;
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <div>
      <header>
        <h1>Currency Exchange</h1>
      </header>
      <main className="currency-exchange-main">
        <div className="currency-form">
          <label htmlFor="account-select">Select Account:</label>
          <select id="account-select" value={selectedAccount} onChange={(e) => setSelectedAccount(e.target.value)}>
            {accounts.map((account) => (
              <option key={account} value={account}>{account}</option>
            ))}
          </select>
          <label htmlFor="amount-input">Amount:</label>
          <input type="number" id="amount-input" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <button onClick={handleConversion}>Convert</button>
        </div>
        <div className="exchange-rates">
          <h2>Exchange Rates</h2>
          <ul>
            {accounts.map((account) => (
              <li key={account}>
                <span>{account}:</span>
                <span>{JSON.stringify(exchangeRates[account])}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="converted-amount">
          <h2>Converted Amount</h2>
          <p>{convertedAmount}</p>
        </div>
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default CurrencyExchangePage;
