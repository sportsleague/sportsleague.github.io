import React from "react";
import "./Team.css";

import logo from "../../assets/sportsleague_logo.png";

class Team extends React.Component {
  render() {
    return (
      <div className="Team">
        <header className="Team-header">
          <img src={logo} className="Team-logo" alt="logo" />
          <p>Team page!</p>
        </header>
      </div>
    );
  }
}

export default Team;
