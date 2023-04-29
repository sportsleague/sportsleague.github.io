import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";

class App extends React.Component {
  render() {
    const root_path = "/website";
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Routes>
            <Route exact path={`${root_path}`} element={<Home />}></Route>
            <Route
              exact
              path={`${root_path}/about`}
              element={<About />}
            ></Route>
            <Route exact path={`${root_path}/team`} element={<Team />}></Route>
            <Route
              exact
              path={`${root_path}/contact`}
              element={<Contact />}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
