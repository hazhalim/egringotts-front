import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

// Import the images
import accountOverviewImg from '../images/account_overview.png';
import transactionHistoryImg from '../images/transaction_history.png';
import currencyExchangeImg from '../images/currency_exchange.png';
import expenditureAnalysisImg from '../images/expenditure_analysis.png';
import settingsImg from '../images/settings.png';

const HomePage = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      // Perform any logout logic here (e.g., clearing tokens, resetting state)
      navigate('/');
    }
  };

  return (
    <div>
      <header>
        <h1>E-Gringgots Bank</h1>
        <nav>
          <ul>
            <li>Welcome, {username}</li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </ul>
        </nav>
      </header>
      <main className="home-main">
        <h2>Welcome</h2>
        <p>What activity would you like to do?</p>
        <div className="activity-options">
          <div className="activity-option">
            <img src={accountOverviewImg} alt="Account Overview" />
            <a href="/account-overview">Account Overview</a>
          </div>
          <div className="activity-option">
            <img src={transactionHistoryImg} alt="Transaction History" />
            <a href="/transaction-history">Transaction History</a>
          </div>
          <div className="activity-option">
            <img src={currencyExchangeImg} alt="Currency Exchange" />
            <a href="/currency-exchange">Currency Exchange</a>
          </div>
          <div className="activity-option">
            <img src={expenditureAnalysisImg} alt="Expenditure Analysis" />
            <a href="/expenditure-analysis">Expenditure Analysis</a>
          </div>
          <div className="activity-option">
            <img src={settingsImg} alt="Settings" />
            <a href="/settings">Settings</a>
          </div>
        </div>
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default HomePage;
