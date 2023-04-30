import React, { useEffect } from "react";
import "./Team.css";

import logo from "../../assets/sportsleague_logo.png";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Team">
      <header className="Team-header">
        <img src={logo} className="Team-logo" alt="logo" />
        <p>Team page!</p>
      </header>
    </div>
  );
}
