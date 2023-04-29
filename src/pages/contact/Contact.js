import React from "react";
import "./Contact.css";

import logo from "../../assets/sportsleague_logo.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <header className="Contact-header">
          <img src={logo} className="Contact-logo" alt="logo" />
          <p>Contact page!</p>
        </header>
      </div>
    );
  }
}

export default Contact;
