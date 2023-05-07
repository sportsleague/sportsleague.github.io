import React from "react";

import "./BioCard.css";

export default function BioCard(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.src} alt={props.name} className="headshot" />
        <div className="header-text">
          <h1 className="name">{props.name}</h1>
          <h3 className="position">{props.position}</h3>
        </div>
      </div>
      <div className="info-container">
        <p className="info">
          <span className="info-label">Location: </span>
          <span className="info-text">{props.location}</span>
        </p>
        <p className="info">
          <span className="info-label">University: </span>
          <span className="info-text">{props.university}</span>
        </p>
        <p className="info">
          <span className="info-label">Major: </span>
          <span className="info-text">{props.major}</span>
        </p>
        <p className="info">
          <span className="info-label">Skills: </span>
          <span className="info-text">{props.skills}</span>
        </p>
      </div>
      <ul className="favorite-teams">
        <li>Golden State Warriors</li>
        <li>Tottenham Hotspur</li>
        <li>Cleveland Browns</li>
        <li>Philadelphia Eagles</li>
        <li>Oakland Athletics</li>
      </ul>
    </div>
  );
}
