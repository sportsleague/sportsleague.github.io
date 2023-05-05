import React from "react";
import "./HomeIcon.css";

export default function HomeIcon(props) {
  return (
    <div className="icon-container">
      <img className="icon" src={props.src} alt={props.title} />
      <h3 className="title">{props.title}</h3>
    </div>
  );
}
