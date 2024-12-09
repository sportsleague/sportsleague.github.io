import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Contact">
      <header className="Contact-header">
        <h1 className="contact-us-header">
          CONTACT <span className="us-text">US</span>
        </h1>
        <p>
          For any inquiries, please contact us at:{" "}
          <a href="mailto:contact@sportsleague.app">contact@sportsleague.app</a>
        </p>
      </header>
    </div>
  );
}
