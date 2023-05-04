import React, { useEffect } from "react";
import "./Home.css";

import athletes from "../../assets/athletes_overlay.png";
import HomeFootnote from "../../components/home_footnote/HomeFootnote";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <div className="header-content">
          <div className="compete-like-a-champion-container">
            <p className="compete-text">COMPETE LIKE </p>
            <p>
              A <span className="champion-text">CHAMPION</span>
            </p>
          </div>
          <img src={athletes} className="athletes" alt="athletes" />
        </div>
        <div className="triangle"></div>
        <div className="rectangle"></div>
      </header>

      <div className="home-features">PLACEHOLDER</div>
      <HomeFootnote />
    </div>
  );
}
