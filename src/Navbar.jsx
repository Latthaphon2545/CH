import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const lessons = [1, 2, 3, 4, 5, 7, 8, 9, 10];

  return (
    <nav>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson}>
            <Link to={`/lesson${lesson}`}>Lesson {lesson}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
