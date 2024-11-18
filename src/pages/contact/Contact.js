import React, { useEffect } from "react";
import "./Contact.css";

import ContactForm from "../../components/contact_form/ContactForm";

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
      </header>
      <ContactForm />
    </div>
  );
}
