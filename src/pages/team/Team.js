import React, { useEffect } from "react";
import "./Team.css";

import "../../components/bio_card/BioCard";
import BioCard from "../../components/bio_card/BioCard";

import IvanJutamulia from "../../assets/team_headshots/ivan_jutamulia.png";
import MaxFrincke from "../../assets/team_headshots/max_frincke.jpeg";
import AdrianAmmon from "../../assets/team_headshots/adrian_ammon.jpg";
import MariaGutierrez from "../../assets/team_headshots/maria_gutierrez.jpg";
import PietroGrassi from "../../assets/team_headshots/pietro_grassi.jpg";


export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Team">
      <header className="Team-header">
        <h1 className="how-we-started-header">
          HOW WE <span className="started-text">STARTED</span>
        </h1>
        <p>
          From the Bay Area, our team met while studying at Berkeley High School
          from 2012-2016. We formed a strong friend group there, sticking
          together ever since and spending college summers with each other while
          sharing fun adventures.
        </p>
        <p>
          One of our common passions has always been love for sports. In the
          summer of 2021 amidst a period of flux in the world, we experienced an
          epiphany moment while discussing how we each engage with professional
          sports, and how that might evolve in a rapidly changing ecosystem. Max
          was set on the idea of <strong>a perfect fantasy application</strong>{" "}
          for all sports fans, while Ivan was keen on integrating{" "}
          <strong>a social platform</strong> dedicated for sports experience
          sharing, sports discourse, and fan engagement.
        </p>
        <p>
          SportsLeague was born out of blending these ideas into a fantasy soccer app
          for those passionate about sports like we are.
        </p>
      </header>
      <div className="meet-the-team-container">
        <h1 className="meet-the-team-header">
          MEET THE <span className="team-text">TEAM</span>
        </h1>
        <div className="bios-container">
          <BioCard
            name="MAX FRINCKE"
            position="Co-Founder, CEO"
            src={MaxFrincke}
            location="Berkeley, CA"
            university="UC Berkeley"
            major="Business"
            skills="Marketing, Sales, FIFA"
            teams="Golden State Warriors, Arsenal F.C., San Francisco 49ers, Chile Men's National Soccer Team"
          />
          <BioCard
            name="IVAN JUTAMULIA"
            position="Co-Founder, CTO"
            src={IvanJutamulia}
            location="Boston, MA"
            university="Massachusetts Institute of Technology"
            major="Computer Science and Engineering"
            skills="Coding, Machine Learning, Statistics, Soccer"
            teams="Golden State Wariors, Philadelphia Eagles, Tottenham Hotspur"
          />
          <BioCard
            name="ADRIAN AMMON"
            position="Graphic Design"
            src={AdrianAmmon}
            location="Oakland, CA"
            university="UC Berkeley, Leibniz University Hannover"
            major="Architecture"
            skills="Design"
            teams="Golden State Warriors, Hertha Berlin, Germany Men's National Soccer Team"
          />
          <BioCard
            name="PIETRO GRASSI"
            position="Marketing"
            src={PietroGrassi}
            location="Los Angeles, CA"
            university="UCLA"
            major="Communications"
            skills="Marketing, Soccer"
            teams="Inter Milan, Italy Men's National Soccer Team"
          />
          <BioCard
            name="MARIA (TOÑI) GUTIERREZ"
            position="UI/UX"
            src={MariaGutierrez}
            location="Santiago, Chile"
            university="Pontificia Universidad Católica de Chile"
            major="Graphic Design"
            skills="Graphic Design, UI/UX"
            teams="Universidad de Chile"
          />
        </div>
      </div>
    </div>
  );
}
