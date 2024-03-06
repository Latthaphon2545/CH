// Game.js
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";


var vocabulary = [
  {
    chinese: "几号",
    pinyin: "jǐ hào",
    english: "what date",
  },
  {
    chinese: "星期",
    pinyin: "xīngqí",
    english: "week",
  },
  {
    chinese: "回国",
    pinyin: "huíguó",
    english: "to return to one's home country",
  },
  {
    chinese: "看",
    pinyin: "kàn",
    english: "to visit, to see",
  },
  {
    chinese: "回来",
    pinyin: "huílái",
    english: "to come back",
  },
  {
    chinese: "明年",
    pinyin: "míngnián",
    english: "next year",
  },
  {
    chinese: "生日",
    pinyin: "shēngrì",
    english: "birthday",
  },
  {
    chinese: "星期日",
    pinyin: "xīngqírì",
    english: "Sunday",
  },
  {
    chinese: "巧",
    pinyin: "qiǎo",
    english: "coincidental",
  },
  {
    chinese: "不好意思",
    pinyin: "bù hǎoyìsi",
    english: "excuse me, I'm sorry",
  },
];

const conversation = [
  {
    who: "A",
    pinyin: "Jīntiān jǐ hào?",
    chinese: "今天几号?",
    english: "What date is today?",
  },
  {
    who: "B",
    pinyin: "Jīntiān shì 10 yuè 1 hào.",
    chinese: "今天是 10 月 1 号。",
    english: "Today is October 1st.",
  },
  {
    who: "A",
    pinyin: "Nǐ shénme shíhòu huílái?",
    chinese: "你什么时候回来?",
    english: "When will you come back?",
  },
  {
    who: "B",
    pinyin: "Wǒ míngnián 1 yuè 3 hào huílái.",
    chinese: "我明年 1 月 3 号回来。",
    english: "I will come back on January 3rd next year.",
  },
  {
    who: "A",
    pinyin: "Nǐ shēngrì jǐ hào?",
    chinese: "你生日几号?",
    english: "When is your birthday?",
  },
  {
    who: "B",
    pinyin: "Wǒ shēngrì shì 10 yuè 1 rì.",
    chinese: "我生日是 10 月 1 日。",
    english: "My birthday is on October 1st.",
  },
  {
    who: "A",
    pinyin: "Nǐ shénme shíhòu huílái?",
    chinese: "你什么时候回来?",
    english: "When will you come back?",
  },
  {
    who: "B",
    pinyin: "Wǒ míngnián 1 yuè 3 hào huílái.",
    chinese: "我明年 1 月 3 号回来。",
    english: "I will come back on January 3rd next year.",
  },
  {
    who: "A",
    pinyin: "Nǐ shēngrì jǐ hào?",
    chinese: "你生日几号?",
    english: "When is your birthday?",
  },
  {
    who: "B",
    pinyin: "Wǒ shēngrì shì 10 yuè 1 rì.",
    chinese: "我生日是 10 月 1 日.",
    english: "My birthday is on October 1st.",
  },
];

// To ask about the date, you can use the phrase "几号" (jǐ hào).
// To ask about the time, you can use the phrase "几点" (jǐ diǎn).
// To ask about the day of the week, you can use the phrase "星期几" (xīngqí jǐ).
// To ask about someone's birthday, you can use the phrase "你生日几号" (nǐ shēngrì jǐ hào).


vocabulary = vocabulary.sort(() => Math.random() - 0.5);

const VocabularyMatcher = () => {
  const [matches, setMatches] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [matchResult, setMatchResult] = useState("");
  const [vocabularyData, setVocabularyData] = useState(vocabulary);
  const [englishVocabularyData, setEnglishVocabularyData] = useState(
    [...vocabulary].sort(() => Math.random() - 0.5)
  );

  const handleMatch = (word) => {
    if (!matches.includes(word) && word.english === selectedWord.english) {
      setMatches([...matches, word]);
      setSelectedWord(null);
      setMatchResult("Correct match!"); // Set matchResult to "Correct match!"
    } else {
      setSelectedWord(null);
      setMatchResult("Incorrect match."); // Set matchResult to "Incorrect match."
    }
  };

  const handleSelectWord = (word) => {
    if (!matches.includes(word) && selectedWord === null) {
      setSelectedWord(word);
    }
  };

  return (
    <div className="Matcher">
      <h1>Vocabulary Matcher (Select chinese word 1st)</h1>
      <div>
        <h2>Matched Words:</h2>
        <ul>
          {matches.map((word, index) => (
            <li key={index}>
              <>
                {word.chinese}
                <br />
                {word.pinyin}
                <br />
                {word.english}
              </>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>Chinese Words:</h2>
          {vocabularyData.map((word, index) => (
            <button
              key={index}
              onClick={() => handleSelectWord(word)}
              disabled={
                matches.includes(word) ||
                (selectedWord && selectedWord !== word)
              }
            >
              {word.chinese} <br /> {word.pinyin}
            </button>
          ))}
        </div>
        <div>
          <h2>English Words:</h2>
          {englishVocabularyData.map((word, index) => (
            <button
              key={index}
              onClick={() => handleMatch(word)}
              disabled={matches.includes(word)}
            >
              {word.english}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

function Learn() {
  const [Num, setNum] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isAnyTextBeingRead, setIsAnyTextBeingRead] = useState(false);

  const handleReadText = (translatedText) => {
    setIsAnyTextBeingRead(true);

    const targetLanguage = "zh";
    const speech = new SpeechSynthesisUtterance(translatedText);
    speech.lang = targetLanguage;
    speech.rate = 0.5;

    const speechPromise = new Promise((resolve) => {
      speech.onend = resolve;
    });

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="Lesson3">
      {/* Vocabulary */}
      <div className="Vocabulary">
        <h1>Vocabulary</h1>
        <ul>
          {vocabulary.map((item, index) => (
            <li
              key={index}
              className="boarder"
              onClick={() => handleReadText(item.chinese)}
              disabled={isAnyTextBeingRead}
            >
              <p>{item.pinyin}</p>
              <p>{item.chinese}</p>
              <p>{item.english}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Conversation */}
      <h1>Conversation</h1>
      <div className="Conversation">
        <ul>
          {conversation.map((item, index) => (
            <li
              key={index}
              className={`Conversation${item.who === "A" ? "women" : "men"}`}
            >
              <div>
                {item.who === "A" ? (
                  <>
                    <img
                      src={item.who === "A" ? Women : Men}
                      alt=""
                      onClick={() => handleReadText(item.chinese)}
                    />
                    <button
                      onClick={() => handleReadText(item.chinese)}
                      disabled={isSpeaking}
                      style={{ fontSize: "20px" }}
                      className="read"
                    >
                      🔊
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleReadText(item.chinese)}
                      disabled={isSpeaking}
                      style={{ fontSize: "20px" }}
                      className="read"
                    >
                      🔊
                    </button>
                    <img
                      src={item.who === "A" ? Women : Men}
                      alt=""
                      onClick={() => handleReadText(item.chinese)}
                    />
                  </>
                )}
              </div>
              {item.who === "A" ? (
                <>
                  <p>
                    {item.who} : {item.pinyin}
                  </p>
                  <p>
                    {item.who} : {item.chinese}
                  </p>
                  <p>
                    {item.who} : {item.english}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {item.pinyin} : {item.who}
                  </p>
                  <p>
                    {item.chinese} : {item.who}
                  </p>
                  <p>
                    {item.english} : {item.who}
                  </p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Main() {
  const [showVocabularyMatcher, setShowVocabularyMatcher] = useState(false);
  const [showLearn, setShowLearn] = useState(true);

  const handleShowVocabularyMatcher = () => {
    setShowVocabularyMatcher(true);
    setShowLearn(false);
  };

  const handleShowLearn = () => {
    setShowVocabularyMatcher(false);
    setShowLearn(true);
  };

  return (
    <div className="Main">
      <Navbar />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Lesson 5 : My birthday.</h1>
        <h2>Wǒ de shēngrì</h2>
        <h3>我的生日</h3>
      </div>
      <div className="Chooes">
        <button onClick={handleShowLearn}>Learn</button>
        <button onClick={handleShowVocabularyMatcher}>
          Game Vocabulary Matcher
        </button>
      </div>
      {showVocabularyMatcher && <VocabularyMatcher />}
      {showLearn && <Learn />}
    </div>
  );
}

export default Main;