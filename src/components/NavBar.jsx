export default function NavBar({page}){

    function navigateTo(path){
        window.location.href = `/portfolio-react/${path}`;
    };

    return(
        <div className="nav-bar">
            <div id="nav-buttons">
                <button id="index"
                type="button"
                className={page === "index" ? "active" : ""}
                onClick={() => navigateTo("index")}>
                    Home
                </button>
                <button id="projects"
                type="button"
                className={page === "projects" ? "active" : ""}
                onClick={() => navigateTo("projects")}>
                    Projects
                </button>
                <button id="skills"
                type="button"
                className={page === "skills" ? "active" : ""}
                onClick={() => navigateTo("skills")}>
                    Skills
                </button>
                <button id="aboutme"
                type="button"
                className={page === "aboutme" ? "active" : ""}
                onClick={() => navigateTo("aboutme")}>
                    About Me
                </button>
                <button id="contact"
                type="button"
                className={page === "contact" ? "active" : ""}
                onClick={() => navigateTo("contact")}>
                    Contact
                </button>
            </div>
        </div>
    );

}