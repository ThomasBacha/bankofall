import React, { useState, useEffect } from "react";
import '../styles/header.css';
import MotivationalQuote from './MotivationalQoute';
function Header() {
    // Create a state variable for the current date and time
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Update the date and time every second
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // The empty dependency array ensures the effect runs only once after component mounts

    // Format the date as "YYYY-MM-DD HH:MM:SS"
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;

    return (
        <>
            <div className="header">
                <img src='https://img.icons8.com/?size=512&id=yYJr4skWFWkF&format=png' alt="Header Logo" />
                
            </div>
            <div className="mainTitle">
                <h1>Welcome To the 12 Lessons of Life</h1>
                <p> Inspired by <a href="https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021"> DR. Peterson</a></p>
                <p ><span className="date-display">{formattedDate}</span></p>
                <p>Qoute of the day 
                    <span><MotivationalQuote/></span>
                    </p>
            </div>
        </>
    );
}

export default Header;
