import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Aboutme";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
function App() {
  return (
    <div className="tab">
      <div className="navigationbar">
        <div className="left">Navin</div>
        <div className="right">
          <div className="r1">
            <Link to="/" className="navr">
              Home
            </Link>
          </div>
          <div className="r2">
            <Link to="/skills" className="navr">
              Skills
            </Link>
          </div>
          <div className="r3">
            <Link to="/projects" className="navr">
              Projects
            </Link>
          </div>
          <div className="r4">
            <Link to="/aboutme" className="navr">
              About Me
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
