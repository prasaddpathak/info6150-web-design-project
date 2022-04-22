import React, { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./theme";
import Switch from '@material-ui/core/Switch';

export default function Toggle() {
    //    const sessionTheme = sessionStorage.getItem('theme')
    // const [currentTheme, setTheme] = (sessionTheme) ? useState(sessionTheme) : useState("light");
    const [currentTheme, setTheme] = useState("light");

    useEffect(() => {
        const theme = currentTheme === "light" ? lightTheme : darkTheme;
        console.log("main", theme)
        Object.keys(theme).forEach((key) => {
            const value = theme[key];
            document.documentElement.style.setProperty(key, value);
        });
    }, [currentTheme]);

    function onToggleTheme() {
        setTheme(currentTheme === "light" ? "dark" : "light");
        //  sessionStorage.setItem('theme',currentTheme)
        console.log(currentTheme);
    }

    return <div >

        <
        Switch
        //   checked={()=>this.state.checkedA}
    onChange = { onToggleTheme }
    name = "checkedA"
    inputProps = {
        { 'aria-label': 'secondary checkbox' }
    }
    /> < /
    div >


}