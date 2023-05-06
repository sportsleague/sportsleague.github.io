import React, { useEffect } from "react";
import "./Contact.css";

import ContactForm from "../../components/contact_form/ContactForm";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Contact">
      <ContactForm />
    </div>
  );
}
