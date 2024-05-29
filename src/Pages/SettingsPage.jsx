import React from 'react';
import './SettingsPage.css';

const SettingsPage = ({ username, email, profilePicture }) => {
  return (
    <div>
      <header>
        <h1>Settings</h1>
      </header>
      <main className="settings-main">
        <div className="profile-info">
          <h2>Profile Information</h2>
          <div>
            <img src={profilePicture} alt="Profile" />
          </div>
          <div>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            {/* Add more profile information fields as needed */}
          </div>
        </div>
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default SettingsPage;
