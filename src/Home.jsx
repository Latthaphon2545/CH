import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isAnyTextBeingRead, setIsAnyTextBeingRead] = useState(false);
  const navigate = useNavigate();


  const handleReadText = (translatedText) => {
    setIsAnyTextBeingRead(true);

    const targetLanguage = "zh";
    const speech = new SpeechSynthesisUtterance(translatedText);
    speech.lang = targetLanguage;
    speech.rate = 0.5; // Slow down the speech

    const speechPromise = new Promise((resolve) => {
      speech.onend = resolve;
    });


    window.speechSynthesis.speak(speech);
    // timeout 2 seconds after the speech ends
    speechPromise.then(() => {
      setTimeout(() => {
        setIsAnyTextBeingRead(false);
        navigate("/lesson1"); // Navigate to the next lesson
      }, 1000);
    });
  };

  return (
    <div className="Home">
      <h1>Welcome to the Chinese Learning Website!</h1>
      <h2>Latthaphon Phoemmanirat 643040813-5 Digital Media Engineering</h2>
      <p>When click on the word, you can listen to the pronunciation.</p>
      <button onClick={() => handleReadText("開始吧")}>開始吧！</button>
      {/* Time out in 2 second */}
      {isAnyTextBeingRead && <p>Moving to the lesson1 in 1 seconds...</p>}
    </div>
  );
}

export default Home;
