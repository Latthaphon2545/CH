// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson3.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";

const conversation = [
  {
    who: "A",
    pinyin: "Nǐ hǎo! Xiǎo péng you! Nǐ jiào shén me míng zi?",
    chinese: "你好！小朋友！你叫什么名字？",
    english: "Hello! Little friend! What is your name?",
  },
  {
    who: "B",
    pinyin: "Wǒ jiào Zhào Hàn.",
    chinese: "我叫赵汉。",
    english: "My name is Zhao Han.",
  },
  {
    who: "A",
    pinyin: "Nǐ jīn nián jǐ suì?",
    chinese: "你今年几岁？",
    english: "How old are you this year?",
  },
  {
    who: "B",
    pinyin: "Nǐ cāi wǒ jǐ suì?",
    chinese: "你猜我几岁？",
    english: "Guess how old I am?",
  },
  {
    who: "A",
    pinyin: "5 suì?",
    chinese: "5岁？",
    english: "5 years old?",
  },
  {
    who: "B",
    pinyin: "Bú duì.",
    chinese: "不对。",
    english: "No.",
  },
  {
    who: "A",
    pinyin: "7 suì?",
    chinese: "7岁？",
    english: "7 years old?",
  },
  {
    who: "B",
    pinyin: "Bú duì, wǒ jīn nián liù suì.",
    chinese: "不对，我今年六岁。",
    english: "No, I'm 6 years old this year.",
  },
  {
    who: "A",
    pinyin: "6 suì. Qǐng wèn nǐ rèn shi zhè gè ā yí ma?",
    chinese: "6岁。请问你认识这个阿姨吗？",
    english: "6 years old. Do you know this aunt?",
  },
  {
    who: "B",
    pinyin: "Bú rèn shi.",
    chinese: "不认识。",
    english: "No.",
  },
];


var vocabulary = [
  {
    pinyin: "jīnnián",
    chinese: "今年",
    english: "this year",
  },
  {
    pinyin: "jǐ",
    chinese: "几",
    english: "how many",
  },
  {
    pinyin: "suì",
    chinese: "岁",
    english: "age, year",
  },
  {
    pinyin: "duōdà",
    chinese: "多大",
    english: "how old",
  },
  {
    pinyin: "xiǎopénɡyou",
    chinese: "小朋友",
    english: "kid",
  },
  {
    pinyin: "cāi",
    chinese: "猜",
    english: "to guess",
  },
  {
    pinyin: "xīng qī liù",
    chinese: "星期六",
    english: "Saturday",
  },
  {
    pinyin: "shìé",
    chinese: "事儿",
    english: "matter, business",
  },
  {
    pinyin: "jiànshēn",
    chinese: "健身",
    english: "to keep fit",
  },
  {
    pinyin: "jiànshēn fánɡ",
    chinese: "健身房",
    english: "gym",
  },
  {
    pinyin: "nǚ",
    chinese: "女",
    english: "female",
  },
  {
    pinyin: "nán",
    chinese: "男",
    english: "male",
  },
  {
    pinyin: "shàngwǔ",
    chinese: "上午",
    english: "morning",
  },
  {
    pinyin: "zhōnɡwǔ",
    chinese: "中午",
    english: "noon",
  },
  {
    pinyin: "xiàwǔ",
    chinese: "下午",
    english: "afternoon",
  },
  {
    pinyin: "kěyǐ",
    chinese: "可以",
    english: "can, okay",
  },
  {
    pinyin: "kàn",
    chinese: "看",
    english: "to take a look",
  },
  {
    pinyin: "āyí",
    chinese: "阿姨",
    english: "aunty",
  },
  {
    pinyin: "dàmā",
    chinese: "大妈",
    english: "aunty",
  },
  {
    pinyin: "jīngjù",
    chinese: "京剧",
    english: "Beijing opera",
  },
  {
    pinyin: "shēngyīn",
    chinese: "声音",
    english: "voice",
  },
  {
    pinyin: "zhēn",
    chinese: "真",
    english: "really",
  },
  {
    pinyin: "hǎotīng",
    chinese: "好听",
    english: "pleasing to the ear",
  },
  {
    pinyin: "niánjì",
    chinese: "年纪",
    english: "age",
  },
  {
    pinyin: "wàipó",
    chinese: "外婆",
    english: "grandmother",
  },
];

const numberChinese = [
  {
    pinyin: "yī",
    chinese: "一",
    english: 1,
  },
  {
    pinyin: "èr",
    chinese: "二",
    english: 2,
  },
  {
    pinyin: "sān",
    chinese: "三",
    english: 3,
  },
  {
    pinyin: "sì",
    chinese: "四",
    english: 4,
  },
  {
    pinyin: "wǔ",
    chinese: "五",
    english: 5,
  },
  {
    pinyin: "liù",
    chinese: "六",
    english: 6,
  },
  {
    pinyin: "qī",
    chinese: "七",
    english: 7,
  },
  {
    pinyin: "bā",
    chinese: "八",
    english: 8,
  },
  {
    pinyin: "jiǔ",
    chinese: "九",
    english: 9,
  },
  {
    pinyin: "shí",
    chinese: "十",
    english: 10,
  },
  {
    english: 100,
    pinyin: "bǎi",
    chinese: "百",
  },
  {
    english: 1000,
    pinyin: "qiān",
    chinese: "千",
  },
  {
    english: 10000,
    pinyin: "wàn",
    chinese: "万",
  },
];

const nember2WhenMoreThan100 = {
  pinyin: "liǎng",
  chinese: "两",
};

const days = [
  {
    pinyin: "xīngqīyī",
    chinese: "星期一",
    english: "Monday",
  },
  {
    pinyin: "xīngqīèr",
    chinese: "星期二",
    english: "Tuesday",
  },
  {
    pinyin: "xīngqīsān",
    chinese: "星期三",
    english: "Wednesday",
  },
  {
    pinyin: "xīngqīsì",
    chinese: "星期四",
    english: "Thursday",
  },
  {
    pinyin: "xīngqīwǔ",
    chinese: "星期五",
    english: "Friday",
  },
  {
    pinyin: "xīngqīliù",
    chinese: "星期六",
    english: "Saturday",
  },
  {
    pinyin: "xīngqītiān",
    chinese: "星期天",
    english: "Sunday",
  },
];

function toChineseNumber(n) {
  if (!Number.isInteger(n) && n < 0) {
    throw Error("请输入自然数");
  }

  const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const digitsAlt = [
    "零",
    "一",
    "两",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
  ];
  const positions = [
    "",
    "十",
    "百",
    "千",
    "万",
    "十万",
    "百万",
    "千万",
    "亿",
    "十亿",
    "百亿",
    "千亿",
  ];
  const charArray = String(n).split("");
  let result = "";
  let prevIsZero = false;
  //处理0  deal zero
  for (let i = 0; i < charArray.length; i++) {
    const ch = charArray[i];
    if (ch !== "0" && !prevIsZero) {
      if (ch === "2" && i < charArray.length - 2) {
        result += digitsAlt[parseInt(ch)] + positions[charArray.length - i - 1];
      } else {
        result += digits[parseInt(ch)] + positions[charArray.length - i - 1];
      }
    } else if (ch === "0") {
      prevIsZero = true;
    } else if (ch !== "0" && prevIsZero) {
      result +=
        "零" + digits[parseInt(ch)] + positions[charArray.length - i - 1];
    }
  }
  //处理十 deal ten
  if (n < 100) {
    result = result.replace("一十", "十");
  }
  if (result === "") {
    result = "Let's input a number";
  }
  return result;
}

vocabulary = vocabulary.sort(() => Math.random() - 0.5);

const VocabularyMatcher = () => {
  const [matches, setMatches] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [matchResult, setMatchResult] = useState("");
  const [vocabularyData, setVocabularyData] = useState(vocabulary);
  const [englishVocabularyData, setEnglishVocabularyData] = useState([...vocabulary].sort(() => Math.random() - 0.5));

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
    speech.rate = 0.5; // Slow down the speech

    const speechPromise = new Promise((resolve) => {
      speech.onend = resolve;
    });

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="Lesson3">
      <div className="number">
        <div>
          <h1>Number</h1>
          <ul>
            {numberChinese.map((item, index) => (
              <li
                key={index}
                className="boarder"
                onClick={() => handleReadText(item.chinese)}
                disabled={isAnyTextBeingRead}
              >
                <div>
                  <p>{item.pinyin}</p>
                  <p>{item.chinese}</p>
                  <p>{item.english}</p>
                </div>
              </li>
            ))}
            <li
              className="boarder"
              onClick={() => handleReadText("两")}
              disabled={isAnyTextBeingRead}
            >
              <div>
                <p>{nember2WhenMoreThan100.pinyin}</p>
                <p>{nember2WhenMoreThan100.chinese}</p>
                <p>2 {">"} 100</p>
              </div>
            </li>
          </ul>
        </div>

        <br />

        <div className="imputNumber">
          <input
            type="number"
            min="0"
            value={Num}
            width={100}
            onChange={(e) => setNum(Number(e.target.value))}
          />
          <p>
            <span
              style={{
                fontSize: "20px",
                color: "red",
                fontWeight: "bold",
              }}
              onClick={() => handleReadText(toChineseNumber(Num))}
            >
              {toChineseNumber(Num)}
            </span>
          </p>
        </div>
      </div>

      {/* Days */}
      <div className="day">
        <h1>Days</h1>
        <ul>
          {days.map((item, index) => (
            <li
              key={index}
              className={item.english}
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
              className={`Conversation${
                item.who === "A" ? "women" : "men"
              }`}
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
        <h1>Lesson 3 : How old are you?</h1>
        <h2>Ni jinnián duõdà?</h2>
        <h3>第三课 你今年 多大？</h3>
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
