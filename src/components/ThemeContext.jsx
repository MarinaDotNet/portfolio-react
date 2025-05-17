import React, {createContext, useState, useEffect} from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme){
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        document.body.className = theme === "light" ? "light-theme" : "";
        localStorage.setItem("theme", theme);
    });


    function toggleTheme(){
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeContext, ThemeProvider};