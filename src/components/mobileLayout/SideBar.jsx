import LightThemeIcon from "../LightThemeIcon";
import DarkThemeIcon from "../DarkThemeIcon";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

export default function SideBar(){
    const {theme, toggleTheme} = useContext(ThemeContext);


    return(
        <div className="side-bar">
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