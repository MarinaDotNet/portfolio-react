import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();
  const page = pathname === "/" ? "home" : pathname.replace("/", "");

  return (
    <div className="nav-bar">
      <div id="nav-buttons">
        <Link to="/">
          <button className={page === "home" ? "active" : ""}>Home.cs</button>
        </Link>
        <Link to="/projects">
          <button className={page === "projects" ? "active" : ""}>Projects.cs</button>
        </Link>
        <Link to="/skills">
          <button className={page === "skills" ? "active" : ""}>Skills.cs</button>
        </Link>
        <Link to="/aboutme">
          <button className={page === "aboutme" ? "active" : ""}>About_Me.cs</button>
        </Link>
        <Link to="/contact">
          <button className={page === "contact" ? "active" : ""}>Contact.cs</button>
        </Link>
      </div>
    </div>
  );
}
