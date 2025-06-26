
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import DecorativeTopComponents from "./mobileLayout/DecorativeTopComponents";
import SideBar from "./mobileLayout/SideBar";
import NavBar from "./NavBar";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import AboutMe from "../pages/Aboutme";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import DeveloperPowerShell from "./DeveloperPowerShell";

export default function MobileLayout(){
    return(
        <Router>
            <div className="page-layout">
                <DecorativeTopComponents />
                <div className="page-content">
                    <SideBar />
                    <div className="">
                        <NavBar />
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
                        <DeveloperPowerShell />
                    </div>
                </div>
                
            </div>
        </Router>
    );
}