import { Link, useLocation } from "react-router-dom";
import ColapsedNavBar from "./mobileLayout/ColapsedNavBar";

export default function NavBar() {
  const { pathname } = useLocation();
  const page = pathname === "/" ? "home" : pathname.replace("/", "");

  // Collapse menu if in mobile mode
  const collapseIfResponsive = () => {
    const navBar = document.getElementById("nav-buttons");
    if(navBar && navBar.classList.contains("responsive")){
      navBar.classList.remove("responsive");
    }
  };

  return (
    <div className="nav-bar">

      <div className="navigate-buttons" id="nav-buttons">
        <Link to="/" className="responsive-nav-button" onClick={collapseIfResponsive}>
          <button className={page === "home" ? "active" : ""}>Home.cs</button>
        </Link>
        <Link to="/projects" className="responsive-nav-button" onClick={collapseIfResponsive}>
          <button className={page === "projects" ? "active" : ""}>Projects.cs</button>
        </Link>
        <Link to="/skills" className="responsive-nav-button" onClick={collapseIfResponsive}>
          <button className={page === "skills" ? "active" : ""}>Skills.cs</button>
        </Link>
        <Link to="/aboutme" className="responsive-nav-button" onClick={collapseIfResponsive}>
          <button className={page === "aboutme" ? "active" : ""}>About_Me.cs</button>
        </Link>
        <Link to="/contact" className="responsive-nav-button" onClick={collapseIfResponsive}>
          <button className={page === "contact" ? "active" : ""}>Contact.cs</button>
        </Link>
      </div>
      
      <ColapsedNavBar />
    
    </div>
  );
}
