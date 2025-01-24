// Header.jsx
import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <button className="menu-button">☰</button>
            <h1 className="title">[AskTube]</h1>
            <div className="auth-buttons">
                <button className="button">Sign Up</button>
                <button className="button">Log In</button>
            </div>
        </header>
    );
};

export default Header;
