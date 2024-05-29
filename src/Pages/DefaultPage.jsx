import React from 'react';
import { Link } from 'react-router-dom';
import './DefaultPage.css';

const DefaultPage = () => {
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
      <main className="default-main">
        <h2>Welcome to E-Gringgots Bank</h2>
        <p>Your one-stop solution for all your banking needs.</p>
        <Link to="/signup">
          <button>Join Now for Free</button>
        </Link>
        <p>Want to start your banking journey?</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <p>Returning user?</p>
      </main>
      <footer>
        <div className="group-name">2024-Fitri-and-Friends</div>
      </footer>
    </div>
  );
};

export default DefaultPage;
