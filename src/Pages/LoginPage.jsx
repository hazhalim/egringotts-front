import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any login logic here (e.g., authentication)
    navigate('/home');
  };

  return (
    <div>
      <header>
        <h1>E-Gringgots Bank</h1>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main className="login-main">
        <div className="login-container">
          <div className="quote">Let's get you signed in</div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-actions">
              <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default LoginPage;
