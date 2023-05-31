import React from "react";

import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsEnvelopeFill,
} from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";

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
      <div className="copyright-container">
        <p>
          <AiOutlineCopyright /> 2023 SportsLeague
        </p>
      </div>
      <div className="terms-conditions-container">
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
}
