import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
  const [gender, setGender] = useState('');
  const [accType, setAccType] = useState('');
  const [idType, setIdType] = useState('');

  return (
    <div>
      <header>
        <h1>E-Gringgots Bank</h1>
        <nav>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main className="signup-main">
        <h2>Ready to Register?</h2>
        <form className="signup-form">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="accType">Account Type:</label>
            <input type="text" id="accType" name="accType" />
          </div>
          <div>
            <label htmlFor="idType">Identification Type:</label>
            <select id="idType" value={idType} onChange={(e) => setIdType(e.target.value)}>
              <option value="">Select ID Type</option>
              <option value="ic">IC</option>
              <option value="army">Army</option>
              <option value="passport">Passport</option>
            </select>
          </div>
          <div>
            <label htmlFor="idNum">ID Number:</label>
            <input type="text" id="idNum" name="idNum" />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Register Now</button>
        </form>
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default SignUpPage;
