import DecorativeTopComponents from "./components/DecorativeTopComponents";
import PageContentLeftSide from "./components/PageContentLeftSide";
import NavBar from "./components/NavBar";
import PageContentRightSide from "./components/PageContentRightSide";
import DecorativeTopPageLine from "./components/DecorativeTopPageLine";
import DeveloperPowerShell from "./components/DeveloperPowerShell";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contact";

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="page-layout">
        <DecorativeTopComponents />

        <div className="main-content">
          <PageContentLeftSide />
          <div className="middle-content">
            <NavBar />
            <DecorativeTopPageLine />
            <div className="component-box">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </div>
          <PageContentRightSide />
        </div>
        <DeveloperPowerShell />
      </div>

    </Router>
  );
}
