import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();
  const page = pathname === "/" ? "home" : pathname.replace("/", "");

  return (
    <div className="nav-bar">
      <div id="nav-buttons">
        <Link to="/">
          <button className={page === "home" ? "active" : ""}>Home</button>
        </Link>
        <Link to="/projects">
          <button className={page === "projects" ? "active" : ""}>Projects</button>
        </Link>
        <Link to="/skills">
          <button className={page === "skills" ? "active" : ""}>Skills</button>
        </Link>
        <Link to="/aboutme">
          <button className={page === "aboutme" ? "active" : ""}>About Me</button>
        </Link>
        <Link to="/contact">
          <button className={page === "contact" ? "active" : ""}>Contact</button>
        </Link>
      </div>
    </div>
  );
}
