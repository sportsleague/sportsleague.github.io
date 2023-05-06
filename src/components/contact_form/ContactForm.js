import React, { useState } from "react";

import "./ContactForm.css";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("Send");
  const [submitOpen, setSubmitOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitOpen(false);
    setFormStatus("Submitting...");
    const { name, email, subject, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    console.log(conFom);
    setFormStatus("Message sent!");
    onReset();
    alert("Your message has been sent!");
  };

  const onReset = () => {
    setFormStatus("Send");
    setSubmitOpen(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Us!</h2>
      <form onSubmit={onSubmit} onReset={onReset}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">
            Subject
          </label>
          <input
            className="form-control"
            type="text"
            id="subject"
            value={subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
          />
        </div>
        <div className="buttons">
          <button
            className="btn btn-outline-danger"
            id="reset-button"
            type="reset"
          >
            Reset
          </button>
          <button
            className="btn btn-disabled"
            id="submit-button"
            type="submit"
            disabled={!submitOpen}
          >
            {formStatus}
          </button>
        </div>
      </form>
    </div>
  );
}
