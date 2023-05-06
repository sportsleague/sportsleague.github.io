import React, { useEffect } from "react";
import "./Home.css";

import HomeIcon from "../../components/home_icon/HomeIcon";
import HomeFootnote from "../../components/home_footnote/HomeFootnote";

import athletes from "../../assets/athletes_overlay.png";
import phone_models from "../../assets/phone_models_two.png";
import bets_icon from "../../assets/icons/bets_icon.png";
import bracket_icon from "../../assets/icons/bracket_icon.png";
import fantasy_icon from "../../assets/icons/fantasy_icon.png";
import nft_icon from "../../assets/icons/nft_icon.png";
import pickem_icon from "../../assets/icons/pickem_icon.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <div className="header-content">
          <div className="compete-like-a-champion-container">
            <p className="compete-text">COMPETE LIKE </p>
            <p>
              A <span className="champion-text">CHAMPION</span>
            </p>
          </div>
          <img src={athletes} className="athletes" alt="athletes" />
        </div>
        <div className="triangle"></div>
        <div className="rectangle"></div>
      </header>

      <div className="home-features">
        <div className="icons-container">
          <HomeIcon src={nft_icon} title="NFTS" />
          <HomeIcon src={fantasy_icon} title="FANTASY" />
          <HomeIcon src={bets_icon} title="BETS" />
          <HomeIcon src={bracket_icon} title="BRACKETS" />
          <HomeIcon src={pickem_icon} title="PICK'EM" />
        </div>
        <img className="phone-models" src={phone_models} alt="phone models" />
      </div>

      <HomeFootnote />
    </div>
  );
}
