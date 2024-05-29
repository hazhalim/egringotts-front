import React from 'react';

const AccountOverviewPage = ({ balance }) => {
  return (
    <div>
      <header>
        <h1>Account Overview</h1>
      </header>
      <main className="account-overview-main">
        <div className="balance-container">
          <h2>Account Balance</h2>
          <p className="balance">${balance ? balance.toFixed(2) : 'N/A'}</p>
        </div>
        {/* Additional content */}
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default AccountOverviewPage;
