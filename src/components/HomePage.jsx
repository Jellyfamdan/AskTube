// HomePage.jsx
import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <button className="menu-button">☰</button>
        <h1 className="title">[AskTube]</h1>
        <div className="auth-buttons">
          <button className="button">Sign Up</button>
          <button className="button">Log In</button>
        </div>
      </header>
      <main className="main-content">
        <p>Which YouTube video would you like me to analyze?</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Paste video link here"
            className="video-input"
          />
          <button className="submit-button">➔</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
