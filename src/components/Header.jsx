// Header.jsx
import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
      <div>
        <header className="header">
        <button className="menu-button">☰</button>
        <h1 className="title">[AskTube]</h1>
        <div className="auth-buttons">
          <button className="button">Sign Up</button>
          <button className="button">Log In</button>
        </div>
        </header>   
      </div>
    );
}

export default Header;