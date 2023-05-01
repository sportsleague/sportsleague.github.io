import React from "react";

import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsEnvelopeFill,
} from "react-icons/bs";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media">
        <button className="btn btn-transparent">
          <BsLinkedin />
        </button>
        <button className="btn btn-transparent">
          <BsInstagram />
        </button>
        <button className="btn btn-transparent">
          <BsFacebook />
        </button>
        <button className="btn btn-transparent">
          <BsEnvelopeFill />
        </button>
      </div>
      <div className="privacy-terms-conditions-container">
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
}
