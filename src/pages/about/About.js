import React, { useEffect } from "react";
import "./About.css";

import logo from "../../assets/sportsleague_logo.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="About">
      <header className="About-header">
        <img src={logo} className="About-logo" alt="logo" />
        <p>About page!</p>
      </header>
    </div>
  );
}
