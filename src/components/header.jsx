import React from "react";
import '../styles/header.css';

function Header() {

    return (
        <>

            <div className="header">
                <img src='https://img.icons8.com/?size=512&id=yYJr4skWFWkF&format=png' />
            </div>
            <div className ="mainTitle">
            <h1>Welcome To the 12 Lessons of Life</h1>
            <p> Inspired by <a href="https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021"> DR. Peterson</a></p>
            </div>            

        </>
    )
}



export default Header;