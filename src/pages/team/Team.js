import React, { useEffect } from "react";
import "./Team.css";

import "../../components/bio_card/BioCard";
import BioCard from "../../components/bio_card/BioCard";

import IvanJutamulia from "../../assets/team_headshots/ivan_jutamulia.png";
import KijunLew from "../../assets/team_headshots/kijun_lew.jpeg";
import MaxFrincke from "../../assets/team_headshots/max_frincke.jpeg";
import YuriBelorusets from "../../assets/team_headshots/yuri_belorusets.jpeg";
import MichaelWalsh from "../../assets/team_headshots/michael_walsh.png";

import WarriorsLogo from "../../assets/sports_logos/warriors_logo.png";
import ArsenalLogo from "../../assets/sports_logos/arsenal_logo.png";
import NinersLogo from "../../assets/sports_logos/49ers_logo.png";
import ChileSoccerLogo from "../../assets/sports_logos/chile_soccer_logo.png";
import TottenhamLogo from "../../assets/sports_logos/tottenham_logo.png";
import BrownsLogo from "../../assets/sports_logos/browns_logo.png";
import EaglesLogo from "../../assets/sports_logos/eagles_logo.png";
import AthleticsLogo from "../../assets/sports_logos/athletics_logo.png";
import BlazersLogo from "../../assets/sports_logos/blazers_logo.png";
import UkraineSoccerLogo from "../../assets/sports_logos/ukraine_soccer_logo.png";
import LiverpoolLogo from "../../assets/sports_logos/liverpool_logo.png";

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
          SportsLeague was born out of blending these ideas into a one-stop shop
          for those passionate about sports like we are.
        </p>
      </header>
      <div className="bios-container">
        <BioCard
          name="MAX FRINCKE"
          position="Co-Founder, CEO"
          src={MaxFrincke}
          location="Berkeley, CA"
          university="UC Berkeley"
          major="Business"
          skills="Marketing, sales, FIFA"
          teamLogos={[WarriorsLogo, ArsenalLogo, NinersLogo, ChileSoccerLogo]}
        />
        <BioCard
          name="IVAN JUTAMULIA"
          position="Co-Founder, CTO"
          src={IvanJutamulia}
          location="Boston, MA"
          university="Massachusetts Institute of Technology"
          major="Computer Science and Engineering"
          skills="Machine learning, statistics, soccer"
          teamLogos={[
            WarriorsLogo,
            TottenhamLogo,
            BrownsLogo,
            EaglesLogo,
            AthleticsLogo,
          ]}
        />
        <BioCard
          name="KIJUN LEW"
          position="Graphic Design"
          src={KijunLew}
          location="Berkeley, CA"
          university="UC Berkeley"
          major=""
          skills=""
          teamLogos={[]}
        />
        <BioCard
          name="YURI BELORUSETS"
          position="Software Development"
          src={YuriBelorusets}
          location="Vancouver, BC"
          university="Universtiy of British Columbia"
          major="Computer Science"
          skills="Software, cooking, skiing"
          teamLogos={[BlazersLogo, UkraineSoccerLogo]}
        />
        <BioCard
          name="MICHEÁL WALSH"
          position="Graphic Design"
          src={MichaelWalsh}
          location="London, UK"
          university="UC Berkeley"
          major="Business"
          skills="Design, marketing, soccer"
          teamLogos={[LiverpoolLogo, NinersLogo, WarriorsLogo]}
        />
      </div>
    </div>
  );
}
