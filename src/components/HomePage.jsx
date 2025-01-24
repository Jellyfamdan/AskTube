// HomePage.jsx
import React, { useState } from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  const [videoLink, setVideoLink] = useState('');

  const handleChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleSubmit = () => {
    // Logic for submitting the video link
    console.log("Video link submitted:", videoLink);
  };

  return (
    <div className="homepage">
      <main className="main-content">
        <p>Which YouTube video would you like me to analyze?</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter YouTube video link"
            className="video-input"
            value={videoLink}
            onChange={handleChange}
            aria-label="YouTube video link"
          />
          <button
            className="submit-button"
            onClick={handleSubmit}
            aria-label="Submit video link"
          >
            ➔
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;