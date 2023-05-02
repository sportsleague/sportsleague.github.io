import React, { useEffect } from "react";
import "./Home.css";

import logo from "../../assets/sportsleague_logo.png";
import HomeFootnote from "../../components/home_footnote/HomeFootnote";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>COMPETE LIKE A CHAMPION!</p>
      </header>
      <HomeFootnote />
    </div>
  );
}
