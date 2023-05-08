import React, { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="About">
      <header className="About-header">
        <div className="header-content">
          <p className="born-in-the-bay-area-text">
            BORN IN THE <span className="bay-area-text">BAY AREA</span>
          </p>
        </div>
      </header>
      <div className="about-the-product-container">
        <h3>About the product</h3>
      </div>
      <div className="mission-statement">
        <h1>MISSION STATEMENT</h1>
        <p>
          Our vision is to optimize global sport fan experience to{" "}
          <strong>socialize</strong> and participate in{" "}
          <strong>online competitions</strong> through{" "}
          <strong>one platform</strong>. With a goal to maximize fan engagement,
          we strive to leverage <strong>gamification</strong> by giving fans an
          online presence to compare levels, stats, and prizes for various
          sports competitions.
        </p>
      </div>
      <div className="features"></div>
    </div>
  );
}
