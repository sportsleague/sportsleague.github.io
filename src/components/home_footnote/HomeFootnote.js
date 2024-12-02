import React from "react";

import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsEnvelopeFill,
} from "react-icons/bs";

import "./HomeFootnote.css";

export default function HomeFootnote() {
  return (
    <div className="footnote-container">
      <div className="ready-for-your-next-championship-container">
        <h2 className="ready-text">READY FOR YOUR NEXT</h2>
        <h2 className="championship-text">CHAMPIONSHIP?</h2>
      </div>
      <div className="home-blurb-container">
        <p>
          We integrate{" "}
          <strong>fantasy competitions</strong> for top world football leagues with a{" "}
          <strong>social media profile</strong> that{" "}
          <strong>includes levels, stats, and leaderboards</strong>. Join
          our waitlist for updates!
        </p>
      </div>
    </div>
  );
}
