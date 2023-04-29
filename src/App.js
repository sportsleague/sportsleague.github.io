import React from "react";
import logo from "./assets/sportsleague_logo.png";
import "./App.css";
import NavigationBar from "./NavigationBar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationBar></NavigationBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to SportsLeague!</p>
        </header>
      </div>
    );
  }
}

export default App;
