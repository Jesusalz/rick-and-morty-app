import React from "react";
import { Link } from "react-router-dom";
import "../styles/welcome-page.css";
export const LandingPage = () => {
  return (
    <div className="welcome-page-container">
      <div className="landing-page-img-container">
        <img
          src="https://wallpapercave.com/wp/wp5702168.png"
          alt="rick&Morty"
        />
      </div>

      <div className="welcome-page">
        <h2>Welcome to Rick and Morty Characters App</h2>
        <Link to={"/home"}>
          <button>Start Exploring</button>
        </Link>
      </div>
    </div>
  );
};
