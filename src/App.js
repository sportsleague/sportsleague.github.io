import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/navigation_bar/NavigationBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Waitlist from "./pages/waitlist/Waitlist";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/waitlist" element={<Waitlist />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
