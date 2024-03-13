// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lesson1 from "./Lesson1/Lesson1";
import Lesson2 from "./Lesson2/Lesson2";
import Lesson3 from "./Lesson3/Lesson3";
import Lesson4 from "./Lesson4/Lesson4";
import Lesson5 from "./Lesson5/Lesson5";
import Lesson6 from "./Lesson6/Lesson6";
import Lesson7 from "./Lesson7/Lesson7";
import Lesson8 from "./Lesson8/Lesson8";
import Lesson9 from "./Lesson9/Lesson9";
import Lesson10 from "./Lesson10/Lesson10";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson4" element={<Lesson4 />} />
        <Route path="/lesson5" element={<Lesson5 />} />
        <Route path="/lesson6" element={<Lesson6 />} />
        <Route path="/lesson7" element={<Lesson7 />} />
        <Route path="/lesson8" element={<Lesson8 />} />
        <Route path="/lesson9" element={<Lesson9 />} />
        <Route path="/lesson10" element={<Lesson10 />} />
      </Routes>
    </Router>
  );
}

export default App;
