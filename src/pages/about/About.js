import React, { useEffect } from "react";
import "./About.css";
import Feature from "../../components/feature/Feature";
import FeedPhoneModel from "../../assets/phone_model_feed.png";
import ProfilePhoneModel from "../../assets/phone_model_profile.png";
import FavoritesPhoneModel from "../../assets/phone_model_favorites.png";

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
      <div className="features-container">
        <h1 className="main-features-text">
          MAIN FEATURES OF{" "}
          <span className="sportsleague-text">SPORTSLEAGUE</span>
        </h1>
        <div className="features-items">
          <div className="feature-container">
            <Feature
              number="1"
              titlePrefix="LIVE SOCIAL"
              titleSuffix="FEED"
              contentOne="Scroll through sports content including posts, polls, and competition activity."
              contentTwo="Like, comment, and share your favorite posts, and engage in an experience just for fans."
            />
            <img
              src={FeedPhoneModel}
              className="phone-model"
              alt="feed phone model"
            />
          </div>
          <div className="feature-container">
            <img
              src={ProfilePhoneModel}
              className="phone-model"
              alt="profile phone model"
            />
            <Feature
              number="2"
              titlePrefix="ONLINE"
              titleSuffix="PROFILE"
              contentOne="Enjoy personalized account with followers/following and levels for each sport."
              contentTwo="Rack up points in the top-right hand corner next to coins, rank, and overall level."
            />
          </div>
          <div className="feature-container">
            <Feature
              number="3"
              titlePrefix="FAVORITES AND"
              titleSuffix="STATS"
              contentOne="Display your favorite teams, leagues, and players."
              contentTwo="Take a look at stats to gauge your success rate, and history to see your fantasy teams and results."
            />
            <img
              src={FavoritesPhoneModel}
              className="phone-model"
              alt="favorites phone model"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
