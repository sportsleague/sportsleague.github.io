import React from "react";
import { FiMapPin } from "react-icons/fi";
import { MdSchool } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { FaHammer } from "react-icons/fa";
import "./BioCard.css";

export default function BioCard(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.src} alt={props.name} className="headshot" />
        <div className="header-text">
          <h1 className="name">{props.name}</h1>
          <h5 className="position">{props.position}</h5>
        </div>
      </div>
      <div className="info-container">
        <p className="info">
          <span className="info-label">
            <FiMapPin /> Location
          </span>
          <span className="info-text">{props.location}</span>
        </p>
        <p className="info">
          <span className="info-label">
            <MdSchool /> University
          </span>
          <span className="info-text">{props.university}</span>
        </p>
        <p className="info">
          <span className="info-label">
            <GiBookmarklet /> Major
          </span>
          <span className="info-text">{props.major}</span>
        </p>
        <p className="info">
          <span className="info-label">
            <FaHammer /> Skills
          </span>
          <span className="info-text">{props.skills}</span>
        </p>
      </div>
      <div className="favorite-teams">
        {props.teamLogos.map((team) => {
          return <img key={team.toString()} src={team} alt={team.toString()} />;
        })}
      </div>
    </div>
  );
}
