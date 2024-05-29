import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import DefaultPage from './Pages/DefaultPage';
import HomePage from './Pages/HomePage';
import AccountOverviewPage from './Pages/AccountOverviewPage';
import TransactionHistoryPage from './Pages/TransactionHistoryPage';
import ExpenditureAnalysisPage from './Pages/ExpenditureAnalysisPage';
import SettingsPage from './Pages/SettingsPage';
import CurrencyExchangePage from './Pages/CurrencyExchangePage';

const App = () => {
  const mockTransactions = [
    { date: '2024-05-30', description: 'Groceries', amount: 50.25, type: 'expense' },
    { date: '2024-05-29', description: 'Salary', amount: 2000.00, type: 'income' }
  ];

  const mockExpenditureData = [
    { category: 'Food', amount: 150.75 },
    { category: 'Utilities', amount: 75.50 },
    { category: 'Transport', amount: 60.00 },
    { category: 'Entertainment', amount: 120.00 },
    { category: 'Others', amount: 50.25 }
  ];

  const mockPersonalInfo = {
    profilePicture: 'https://example.com/profile.jpg',
    username: 'john_doe',
    email: 'john@example.com',
    dob: '1990-01-01',
    mobileNum: '123-456-7890',
    id: '1234567890',
    contact: 'John Doe',
    address: '123 Main St, City, Country'
  };

  const mockCurrencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage username="John" />} />
        <Route path="/account-overview" element={<AccountOverviewPage balance={1000} />} />
        <Route path="/transaction-history" element={<TransactionHistoryPage transactions={mockTransactions} balance={1000} />} />
        <Route path="/expenditure-analysis" element={<ExpenditureAnalysisPage expenditureData={mockExpenditureData} />} />
        <Route path="/settings" element={<SettingsPage personalInfo={mockPersonalInfo} />} />
        <Route path="/currency-exchange" element={<CurrencyExchangePage currencies={mockCurrencies} />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
