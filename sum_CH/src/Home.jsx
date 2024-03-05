// Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Chinese Learning Website!</h1>
      <p>Click on the links in the navbar to start learning.</p>
      <Link to="/lesson1">Get Start!!!</Link>
    </div>
  );
}

export default Home;
