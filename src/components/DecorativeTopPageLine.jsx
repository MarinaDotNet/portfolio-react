import DarkThemeIcon from "./DarkThemeIcon";
import LightThemeIcon from "./LightThemeIcon";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function DecorativeTopPageLine(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    return(
    <div className="header-stripe">
        <span className="text-primary">MarinaDotNet.Portfolio</span>
        <a id={theme} 
        type="button" 
        onClick={toggleTheme}
        className="color-theme-icon"
        title="Change theme">
            {theme === "light"
                ? <LightThemeIcon />
                : <DarkThemeIcon />
            }
        </a>
    </div>
    );
}