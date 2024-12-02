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
    const { name, email, phone, message, method } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
      method: method.value,
    };
    console.log(conFom);
    setFormStatus("Message sent!");
    onReset();
    alert(`Thanks ${name.value}, you have been added to the waitlist!`);
  };

  const onReset = () => {
    setFormStatus("Send");
    setSubmitOpen(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setMethod("");
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
              id="email"
              value="email"
              onChange={(e) => setMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="form-check">
          <input
              className="form-check-input"
              type="radio"
              name="method"
              id="phone"
              value="phone"
              required
              onChange={(e) => setMethod(e.target.value)}
            />
            <label className="form-check-label" htmlFor="phone">
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
