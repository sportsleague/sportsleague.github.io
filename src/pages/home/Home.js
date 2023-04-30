import React, { useEffect } from "react";
import "./Home.css";

import logo from "../../assets/sportsleague_logo.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Welcome to SportsLeague!</p>
      </header>
    </div>
  );
}
