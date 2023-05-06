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
          We combine your{" "}
          <strong>fantasy teams, DFS, bracketcasts, and Pick'Em</strong>, with a{" "}
          <strong>personalized account</strong> that{" "}
          <strong>includes teams, levels, stats, and player cards!</strong> Join
          our newsletter for more!
        </p>
      </div>
    </div>
  );
}
