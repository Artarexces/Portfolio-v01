import React, { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react"

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className='dark-mode'>
            <button onClick={() => setDarkMode(!darkMode)} className='dark-mode-btn'>
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
        </div>
    )
}

export default DarkModeToggle
