// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson1.css";
import Navbar from "../Navbar";

const pinyinChart = [
  "b",
  "p",
  "m",
  "f",
  "d",
  "t",
  "n",
  "l",
  "g",
  "k",
  "h",
  "j",
  "q",
  "x",
  "zh",
  "ch",
  "sh",
  "r",
  "z",
  "c",
  "s",
  "y",
  "w",
];

function Game() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [pinyinChartVisible, setPinyinChartVisible] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  // Function to initialize flashcards
  function initializeFlashcards() {
    const allFlashcards = [];
    for (let i = 0; i < pinyinChart.length - 1; i++) {
      allFlashcards.push({
        pinyin: pinyinChart[i],
        meaning: pinyinChart[i + 1], // The next pinyin in the array becomes the meaning
      });
    }
    setFlashcards(allFlashcards);
  }

  // Function to start the flashcard game
  function startGame() {
    initializeFlashcards();
    setCurrentCardIndex(0);
    setScore(0);
    setGameStarted(true);
  }

  // Function to check the user's answer
  function checkAnswer(answer) {
    const currentFlashcard = flashcards[currentCardIndex];
    if (answer.toLowerCase() === currentFlashcard.meaning.toLowerCase()) {
      alert("Correct!");
      setScore(score + 1);
    } else {
      alert(`Incorrect! The correct answer is: ${currentFlashcard.meaning}`);
    }

    setInputValue("");

    // Move to the next flashcard
    setCurrentCardIndex(currentCardIndex + 1);

    // If all flashcards are completed, end the game
    if (currentCardIndex === flashcards.length - 1) {
      alert(`Game Over! Your Score: ${score}`);
      startGame(); // Restart the game
    }
  }

  // useEffect to start the game only when flashcards array is empty
  useEffect(() => {
    if (flashcards.length === 0) {
      startGame();
    }
  }, [flashcards]);

  const togglePinyinChart = () => {
    setPinyinChartVisible(!pinyinChartVisible);
  };

  return (
    <div>
      <Navbar />
      <div></div>
      <div className="game-container">
        {pinyinChartVisible && (
          <div className="pinyin-chart">
            {pinyinChart.map((pinyin, index) => (
              <p key={index} style={{ display: "inline", marginRight: "20px" }}>
                {pinyin}
              </p>
            ))}
          </div>
        )}

        <br />
        <button onClick={togglePinyinChart} className="pinyin-chart-button">
          {pinyinChartVisible ? "Hide Pinyin Chart" : "Show Pinyin Chart"}
        </button>

        <br />

        <div className="flashcard">
          {flashcards.length > 0 && currentCardIndex < flashcards.length && (
            <div>
              <p className="pinyin-label">Pinyin:</p>
              <p className="pinyin">{flashcards[currentCardIndex].pinyin}</p>
              <input
                type="text"
                className="answer-input"
                placeholder="Type the next pinyin"
                value={inputValue} // Set the input value to the state variable
                onChange={(e) => {
                  setInputValue(e.target.value); // Update the state variable when the input changes
                  checkAnswer(e.target.value);
                }}
              />
              <p className="score-label">Score: {score}</p>
            </div>
          )}
        </div>
        <button className="start-button" onClick={startGame}>
          Start Flashcards
        </button>
        <div className="instructions">
          <h2>Instructions</h2>
          <p>1. Click the "Start Flashcards" button to start the game.</p>
          <p>2. A pinyin will be shown on the flashcard.</p>
          <p>3. Type the next pinyin in the input box.</p>
          <p>
            4. The game will automatically move to the next flashcard after you
            type your answer.
          </p>
          <p>5. Your score will be shown at the end of the game.</p>
        </div>
      </div>
    </div>
  );
}
export default Game;
