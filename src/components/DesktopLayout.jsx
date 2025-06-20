import DecorativeTopComponents from "./desktopLayout/DecorativeTopComponents.jsx";
import PageContentLeftSide from "./desktopLayout/PageContentLeftSide.jsx";
import NavBar from "./NavBar.jsx";
import PageContentRightSide from "./desktopLayout/PageContentRightSide.jsx";
import DecorativeTopPageLine from "./desktopLayout/DecorativeTopPageLine.jsx";
import DeveloperPowerShell from "./DeveloperPowerShell";

import Home from "../pages/Home.jsx";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import AboutMe from "../pages/Aboutme";
import Contact from "../pages/Contact";

import { HashRouter as Router, Routes, Route } from "react-router-dom";


export default function DesktopLayout(){
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