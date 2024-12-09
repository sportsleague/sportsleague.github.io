import React, { useState } from "react";

import "./WaitlistForm.css";

export default function WaitlistForm() {
  const [formStatus, setFormStatus] = useState("Send");
  const [submitOpen, setSubmitOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitOpen(false);
    setFormStatus("Submitting...");
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    
    fetch(
      "https://script.google.com/macros/s/AKfycbzt9dPTk-BNMba-bRG3NL8FgfxEBjnLG0nFSWU2vfaZivacGw_8LVH6n4-Lgx-HCKsrLA/exec",
      {
        method: "POST",
        body: formData, 
      }
    ).then((res) => {
      if (res.ok) {
        console.log("Form data successfully sent to Google Sheet");
        setFormStatus("Message sent!");
        onReset();
        alert(`You've have been added to the waitlist!`);
      } else {
        console.error("Error sending form data to Google Sheet");
        alert(`Error submitting form. Please try again.`);
      }
    });
    
  };

  const onReset = () => {
    setFormStatus("Send");
    setSubmitOpen(true);
    setName("");
    setEmail("");
    setPhone("");
    setMethod("");
    setMessage("");
  };

  return (
    <div className="container mt-5">
      <p>Thanks for your interest in joining SportsLeague! Our app is going to launch soon, featuring soccer match predictions, bracketcasts, online social media, the ability to win prizes, and more! Please fill out the following form to join our waitlist, and we will contact you when we launch.</p>
      <form onSubmit={onSubmit} onReset={onReset}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            What is your full name? (required)
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <p>What is your contact information? (at least one required)</p>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="method">
            How would you like to be contacted? (required)
          </label>
          <div className="form-check">
          <input
              className="form-check-input"
              type="radio"
              name="method"
              id="email-method"
              value="email"
              onChange={(e) => setMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="email-method">
              Email
            </label>
          </div>
          <div className="form-check">
          <input
              className="form-check-input"
              type="radio"
              name="method"
              id="phone-method"
              value="phone"
              required
              onChange={(e) => setMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="phone-method">
              Phone
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="method"
              id="both"
              value="both"
              onChange={(e) => setMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="both">
              Both
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            If you have any special requests, recommendations, or comments, please share with us below!
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={message}
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
