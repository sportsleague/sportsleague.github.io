import React from "react";
import "./Home.css";

import logo from "../../assets/sportsleague_logo.png";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>Welcome to SportsLeague!</p>
        </header>
      </div>
    );
  }
}

export default Home;
