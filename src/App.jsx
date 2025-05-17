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

import React, {useState, useEffect} from "react";

export default function App(){
  const path = window.location.pathname;

  const [page, setPage] = useState(() => {
    const name = path.slice("/portfolio-react/".length, (path.length));
    return name || "index";
  });

  useEffect(() => {
    if(!page){
      setPage("index");
    }
  }, [page]);

  function renderPage(){
    switch(page){
      case "index":
      case "home":  return <Home />;
      case "projects": return <Projects />;
      case "skills": return <Skills />;
      case "aboutme": return <AboutMe />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return(
  <>
    <DecorativeTopComponents />

    <div className="page-layout">
      <PageContentLeftSide />
      <div className="main-content">
        <NavBar page={page}/>
        <DecorativeTopPageLine />
        <div className="component-box">
          {renderPage()}
        </div> 
      </div>
      <PageContentRightSide />    
    </div>
    <DeveloperPowerShell />
  </>);
}