import React from "react";
import "./Features.css";

export default function Features(props) {
  return (
    <div className="feature-text">
      <h2>
        <span className="number">{props.number} </span>
        <span className="prefix">{props.titlePrefix} </span>
        <span className="suffix">{props.titleSuffix}</span>
      </h2>
      <p className="feature-content">{props.contentOne}</p>
      <p className="feature-content">{props.contentTwo}</p>
    </div>
  );
}
