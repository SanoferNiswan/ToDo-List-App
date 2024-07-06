import React from "react";
import logo from './logo2.png'
import { FaSun, FaMoon } from "react-icons/fa";

const Header=({title,theme,toggleTheme})=>{

    return(
        <header>
             <img src={logo} alt="Logo" className="logo" />
            <h1>{title}</h1>
            <button onClick={toggleTheme}>
                {theme === 'light'? <FaMoon /> : <FaSun />} 
            </button>
        </header>
    );
};

export default Header