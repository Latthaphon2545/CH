// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/lesson1">Lesson 1</Link>
        </li>
        <li>
          <Link to="/lesson2">Lesson 2</Link>
        </li>
        <li>
          <Link to="/lesson3">Lesson 3</Link>
        </li>
        <li>
          <Link to="/lesson4">Lesson 4</Link>
        </li>
        <li>
          <Link to="/lesson5">Lesson 5</Link>
        </li>
        <li>
          <Link to="/lesson7">Lesson 7</Link>
        </li>
        <li>
          <Link to="/lesson8">Lesson 8</Link>
        </li>
        <li>
          <Link to="/lesson9">Lesson 9</Link>
        </li>
        <li>
          <Link to="/lesson10">Lesson 10</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
