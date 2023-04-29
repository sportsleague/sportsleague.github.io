import React from "react";
import "./About.css";

import logo from "../../assets/sportsleague_logo.png";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <header className="About-header">
          <img src={logo} className="About-logo" alt="logo" />
          <p>About page!</p>
        </header>
      </div>
    );
  }
}

export default About;
