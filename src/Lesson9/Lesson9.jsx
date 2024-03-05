import React, { useState } from "react";
import "./Lesson9.css";
import translateText from "../GoogleTranslate";

function Game() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("zh"); // Default: English

  const handleTranslate = async () => {
    if (inputText) {
      const result = await translateText(inputText, targetLanguage);
      setTranslatedText(result);
    }
  };

  const handleReadText = () => {
    const speech = new SpeechSynthesisUtterance(translatedText);
    speech.lang = targetLanguage;
    window.speechSynthesis.speak(targetLanguage);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="zh">Chinese</option>
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && (
        <>
          <p>{translatedText}</p>
          <button onClick={handleReadText}>Read Text</button>
        </>
      )}
    </div>
  );
}

export default Game;
