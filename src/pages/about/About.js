import React, { useEffect } from "react";
import "./About.css";
import Feature from "../../components/feature/Feature";
import FeedPhoneModel from "../../assets/phone_feed.png";
import ProfilePhoneModel from "../../assets/phone_profile.png";
import PickEmPhoneModel from "../../assets/phone_pickem.png";

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
        <h5>
          Our vision is to optimize global sport fan experience to{" "}
          <strong>socialize</strong> and participate in{" "}
          <strong>online competitions</strong> through{" "}
          <strong>one platform</strong>. With a goal to maximize fan engagement,
          we strive to leverage <strong>gamification</strong> by giving fans an
          online presence to compare levels, stats, and prizes for various
          sports competitions, starting with soccer.
        </h5>
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
              titlePrefix="DAILY"
              titleSuffix="PICK'EM"
              contentOne="Enjoy daily Pick'Em challenges and earn coins and points for each correct pick."
              contentTwo="Display your superior sports knowledge and show off your best results!"
            />
            <img
              src={PickEmPhoneModel}
              className="phone-model"
              alt="pick em phone model"
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
              contentOne="Enjoy your own personalized account with favorite teams, leagues, and players."
              contentTwo="Track your success rate and pick history and try to one-up your friends!"
            />
          </div>
            <div className="feature-container">
              <Feature
                number="3"
                titlePrefix="LIVE SOCIAL"
                titleSuffix="FEED"
                contentOne="Scroll through content such as recent picks and competition activity."
                contentTwo="Like, comment, and share your favorite posts - engage in an experience just for fans!"
              />
            <img
              src={FeedPhoneModel}
              className="phone-model"
              alt="feed phone model"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
