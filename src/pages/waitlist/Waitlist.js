import React, { useEffect } from "react";
import "./Waitlist.css";

import WaitlistForm from "../../components/waitlist_form/WaitlistForm";

export default function Waitlist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Waitlist">
      <header className="Waitlist-header">
        <h1 className="waitlist-text-header">
          SPORTSLEAGUE <span className="waitlist-text">WAITLIST</span>
        </h1>
      </header>
      <WaitlistForm />
    </div>
  );
}
