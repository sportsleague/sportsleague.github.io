import React from "react";
import logo from "./assets/sportsleague_logo.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to SportsLeague!</p>
        </header>
      </div>
    );
  }
}

export default App;
