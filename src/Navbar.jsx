import React, { useState } from "react";
import { Link } from "react-router-dom";
import barImg from "./img/menuMob.png";
import "./Navbar.css";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const lessons = [1, 2, 3, 4, 5, 7, 8, 9, 10];

    return (
        <nav className="navbar">

            <div className="NavBar__links">
                {lessons.map((lesson) => (
                    <Link key={lesson} className="desktopMenuListItems" to={`/lesson${lesson}`}>Lesson {lesson}</Link>
                ))}
            </div>

            <button className="NavBarButton" onClick={() => setShowMenu(!showMenu)}>Menu</button>

            {showMenu && (
                <div className="NavMenu__links">
                    {lessons.map((lesson) => (
                        <Link key={lesson} className="ListItem" to={`/lesson${lesson}`}>Lesson {lesson}</Link>
                    ))}
                </div>
            )}

            <img
                src={barImg}
                alt="Menu"
                className="mobMenu"
                onClick={() => setShowMenu(!showMenu)}
            />
            <p>Can click for listen to the word (Learn Section Only) </p>
        </nav>
        
    );
}

export default Navbar;