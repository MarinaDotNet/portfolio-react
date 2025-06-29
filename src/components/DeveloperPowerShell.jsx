// Importing necessary React hooks and modules
import {useState, useContext, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import {ThemeContext} from "./ThemeContext";

// Importing necessary React hooks and modules
import "./developerPowerShellStyles.css";
import "../index.css";
import "./desktopLayout/pageContententRightSideStyles.css";

export default function DeveloperPowerShell(){
    // Default boot message lines displayed in the PowerShell
    const defaultLines = [
        "**********************************************",
        "MarinaDotNet Developer 2025 Portfolio v2.1",
        "** Copyright © 2025 Marina Sichova",
        "**********************************************",
        <span>Type '<span className="cmd">help</span>' for commands.</span>];

     // State for console lines and user input
    const [lines, setLines] = useState(defaultLines);
    const [userInput, setUserInput] = useState("");

    // Reference to scroll the console to the bottom on new output
    const consoleRef = useRef(null);
    useEffect(() => {
        if(consoleRef.current){
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [lines]);

    // React Router navigation hook
    const navigate = useNavigate();

    // Access toggleTheme from context
    const {toggleTheme} = useContext(ThemeContext);

    // Processes a command typed by the user
    const handleCommand = (cmd) => {
        let response = "";

        switch(cmd.toLowerCase()){
            case "help":
                response = <span>Available commands:<br/>
                    {/* List available commands*/}
                    press <span className="cmd"> /home.cs</span> or <span className="cmd">home</span> or <span className="cmd">h</span> to go to home page,<br/> 
                    press <span className="cmd"> /projects.cs</span> or <span className="cmd">projects</span> or <span className="cmd">p</span> to go to to projects page,<br/> 
                    press <span className="cmd"> /skills.cs</span> or <span className="cmd">skills</span> or <span className="cmd">s</span> to go to to skills page,<br/> 
                    press <span className="cmd"> /about_me.cs</span> or <span className="cmd">about_me</span> or <span className="cmd">a</span> to go to to about_me page,<br/>
                    press <span className="cmd"> /contact.cs</span> or <span className="cmd">contact</span> or <span className="cmd">c</span> to go to to contact page,<br/> 
                    press <span className="cmd"> switch-theme</span> or <span className="cmd">theme</span> or <span className="cmd">th</span> to switch color theme,<br/> 
                    press <span className="cmd"> clear</span> or <span className="cmd">cls</span> to clear the console</span>;
                break;
            case "/home.cs":
            case "home": 
            case "home.cs":
            case "h":
                navigate("/home");
                break;
            case "/projects.cs":
            case "projects": 
            case "projects.cs":
            case "p":
                navigate("/projects");
                break;
            case "/skills.cs": 
            case "skills": 
            case "skills.cs":
            case "s":
                navigate("/skills");
                break;
            case "/about_me.cs": 
            case "about_me": 
            case "about_me.cs":
            case "a":
                navigate("/aboutme");
                break;
            case "/contact.cs": 
            case "contact": 
            case "contact.cs":
            case "c":
                navigate("/contact");
                break;
            case "switch-theme":
            case "th":
                toggleTheme();
                break;
            case "clear":
            case "cls":
                {/* Reset to default lines */}
                setLines(defaultLines);
                return;
            default:
                {/* Handle unknown command */}
                response = <span>
                    <span className="text-warning">Unknown command: 
                        <span className="cmd-warning"> '{cmd}'</span>
                        </span>, try '<span className="cmd">help</span>'
                     to see available commands.</span>;
        }
        // Append user's command and response to the console output
        setLines([...lines, <span className="cmd">{'>'}{cmd}</span>, response]);
    };

    // Handles form submission (Enter key)
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!userInput.trim()){
            return;
        }
        handleCommand(userInput.trim());
        setUserInput("");
    };

    return(
    <div className="footer">
        {/* PowerShell header with title and window control icons */}
        <div className="developer-powershell-header">
                <span className="console-window-header">Developer Powershell</span>
                <div className="divider-expandable">
                {/* divider-expandable div end*/}
                </div>
                <div className="properties-windows-controls">
                    {/* Window control buttons: collapse, resize, close */}
                    <button className="btn-icon-properties">
                        {/* down arrow */}
                        <svg width="8" height="5.5" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.91713 8.55482L0.42433 0.174181H11.4099L5.91713 8.55482Z" fill="var(--color-text-primary)" />
                        </svg>
                    </button>
                    <button className="btn-icon-properties">
                        {/* square and line */}
                        <svg width="10.5" height="4" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6.9834" y="0.174164" width="9.06077" height="5.5871" fill="var(--color-text-primary)" />
                        <line x1="6.9834" y1="3.46773" x2="0.187819" y2="3.46773" stroke="var(--color-text-primary)" />
                        </svg>
                    </button>
                    <button className="btn-icon-properties">
                        {/* X icon */}
                        <svg width="9.5" height="7.5" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="15.4324" y2="-0.5" transform="matrix(0.689722 -0.724074 0.804166 0.594405 1.91307 12.5548)" stroke="var(--color-text-primary)" />
                        <line y1="-0.5" x2="15.7742" y2="-0.5" transform="matrix(0.804166 0.594405 -0.689722 0.724074 0.972366 2.37035)" stroke="var(--color-text-primary)" />
                        </svg>
                    </button>
                {/* properties-windows-controls div end */}
                </div>
        {/* developer-powershell-header div end */}
        </div>
        {/* Command bar with icons */}
        <div className="powershell-bar">
            {/* + icon */}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.22727 10.7525V0.405953H6.22443V10.7525H5.22727ZM0.556818 6.08209V5.07641H10.8949V6.08209H0.556818Z" fill="var(--color-accent-green)"/>
            </svg>
            Developer PowerShell 
                {/* down arrow */}
                <svg width="9" height="6" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.91713 8.55482L0.42433 0.174181H11.4099L5.91713 8.55482Z" fill="var(--color-text-primary)" />
                </svg>
                <div className="divider-vertical divider-single-solid"></div>

                {/* copy icon */}
                <svg width="10" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.02942" y="0.769226" width="7.47059" height="9.35043" fill="var(--color-background)" stroke="var(--color-text-muted)"/>
                    <rect x="0.5" y="5.94443" width="7.47059" height="9.35043" fill="var(--color-background)" stroke="var(--color-text-muted)"/>
                </svg>

                {/* paste icon */}
                <svg width="10" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5717 0.769226C7.42272 0.769378 8.92815 2.28069 8.92815 4.15106C8.92792 6.02123 7.42258 7.53177 5.5717 7.53192C3.72069 7.53192 2.21451 6.02133 2.21428 4.15106C2.21428 2.2806 3.72055 0.769226 5.5717 0.769226Z" fill="#0F0F2E" stroke="#A1A1A1"/>
                    <rect x="0.5" y="3.09808" width="9.28571" height="9.86795" fill="var(--color-background)" stroke="var(--color-text-muted)"/>
                    <rect x="7.35715" y="10.8609" width="4.14286" height="4.43397" fill="var(--color-background)" stroke="var(--color-text-muted)"/>
                </svg>
                <div className="divider-vertical divider-single-solid"></div>
        {/* powershell-bar div end */}
        </div>

         {/* Console output area */}
        <div className="console-window" ref={consoleRef}>
            {lines.map((line, index) =>(
                <div key={index} className="console-line">
                {line}
                </div>
            ))}

            <form onSubmit={handleSubmit} className="console-input-form" name="consoleForm">
                <span name="consolePrefics" className="console-prefics">{"PS MarinaDotNet.github.io>"}</span>
                <input
                name="consoleInput"
                className="console-input"
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                autoFocus />
            </form>
        </div>
    {/* footer div end */}
    </div>
    );

}