import React from "react";
import "./Feature.css";

export default function Feature(props) {
  return (
    <div className="feature-text">
      <h2>
        <span className="number">{props.number} </span>
        <span className="prefix">{props.titlePrefix} </span>
        <span className="suffix">{props.titleSuffix}</span>
      </h2>
      <h4 className="feature-content">{props.contentOne}</h4>
      <h4 className="feature-content">{props.contentTwo}</h4>
    </div>
  );
}
