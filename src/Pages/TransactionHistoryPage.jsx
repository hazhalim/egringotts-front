import React from 'react';
import './TransactionHistoryPage.css';

const TransactionHistoryPage = ({ transactions }) => {
  return (
    <div>
      <header>
        <h1>Transaction History</h1>
      </header>
      <main className="transaction-history-main">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default TransactionHistoryPage;
