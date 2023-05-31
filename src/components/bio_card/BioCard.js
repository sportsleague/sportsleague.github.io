import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  FcHome,
  FcGraduationCap,
  FcReading,
  FcSupport,
  FcSportsMode,
} from "react-icons/fc";
import "./BioCard.css";

export default function BioCard(props) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!flipped);
  };

  return (
    <ReactCardFlip containerClassName="card" isFlipped={flipped}>
      <div className="card-front-title" onClick={handleClick}>
        <img src={props.src} alt={props.name} className="headshot" />
        <div className="header-text">
          <h1 className="name">{props.name}</h1>
          <h5 className="position">{props.position}</h5>
        </div>
      </div>
      <div className="card-back-bio" onClick={handleClick}>
        <p className="info">
          <span className="info-label">
            <FcHome className="info-icon" /> Location
          </span>
          <span className="info-text">{props.location}</span>
        </p>
        <p className="info">
          <span className="info-label">
            <FcGraduationCap className="info-icon" /> University
          </span>
          <span className="info-text">{props.university}</span>
        </p>
        <p className="info">
          <span className="info-label">
            <FcReading className="info-icon" /> Major
          </span>
          <span className="info-text">{props.major}</span>
        </p>
        <p className="info">
          <span className="info-label">
            <FcSupport className="info-icon" /> Skills
          </span>
          <span className="info-text">{props.skills}</span>
        </p>
        <p className="info">
          <span className="info-label">
            <FcSportsMode className="info-icon" /> Favorite Teams
          </span>
          <span className="info-text">{props.teams}</span>
        </p>
        <p className="bio"></p>
      </div>
    </ReactCardFlip>
  );
}
