import React, { useEffect } from "react";
import "./Contact.css";

import logo from "../../assets/sportsleague_logo.png";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Contact">
      <header className="Contact-header">
        <img src={logo} className="Contact-logo" alt="logo" />
        <p>Contact page!</p>
      </header>
    </div>
  );
}
