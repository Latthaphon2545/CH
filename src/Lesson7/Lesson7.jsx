// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson7.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";



var vocabulary = [
  {
    chinese: "每天",
    pinyin: "měi tiān",
    english: "every day",
  },
  {
    chinese: "昨天",
    pinyin: "zuó tiān",
    english: "yesterday",
  },
  {
    chinese: "今天",
    pinyin: "jīn tiān",
    english: "today",
  },
  {
    chinese: "明天",
    pinyin: "míng tiān",
    english: "tomorrow",
  },
  {
    chinese: "早上",
    pinyin: "zǎo shàng",
    english: "morning",
  },
  {
    chinese: "中午",
    pinyin: "zhōng wǔ",
    english: "noon",
  },
  {
    chinese: "下午",
    pinyin: "xià wǔ",
    english: "afternoon",
  },
  {
    chinese: "晚上",
    pinyin: "wǎn shàng",
    english: "evening",
  },
  {
    chinese: "凌晨",
    pinyin: "líng chén",
    english: "early morning",
  },
  {
    chinese: "饭",
    pinyin: "fàn",
    english: "rice",
  },
  {
    chinese: "餐",
    pinyin: "cān",
    english: "meal",
  },
  {
    chinese: "时间",
    pinyin: "Time",
    english: "time",
  },
  {
    chinese: "早饭",
    pinyin: "zǎo fàn",
    english: "breakfast",
  },
  {
    chinese: "午饭",
    pinyin: "wǔ fàn",
    english: "lunch",
  },
  {
    chinese: "晚饭",
    pinyin: "wǎn fàn",
    english: "dinner",
  },
  {
    chinese: "起床",
    pinyin: "qǐ chuáng",
    english: "to get up",
  },
  {
    chinese: "洗澡",
    pinyin: "xǐ zǎo",
    english: "to take a shower",
  },
  {
    chinese: "上网",
    pinyin: "shàng wǎng",
    english: "to go online",
  },
  {
    chinese: "看电视",
    pinyin: "kàn diàn shì",
    english: "to watch TV",
  },
  {
    chinese: "见朋友",
    pinyin: "jiàn péng yǒu",
    english: "to meet friends",
  },
  {
    chinese: "洗脸",
    pinyin: "xǐ liǎn",
    english: "to wash your face",
  },
  {
    chinese: "涮牙",
    pinyin: "shuàn yá",
    english: "to brush your teeth",
  },
  {
    chinese: "睡觉",
    pinyin: "shuì jiào",
    english: "to go to sleep",
  },
  {
    chinese: "学校",
    pinyin: "xué xiào",
    english: "school",
  },
  {
    chinese: "图书馆",
    pinyin: "tú shū guǎn",
    english: "library",
  },
  {
    chinese: "上课",
    pinyin: "shàng kè",
    english: "to go to class",
  },
  {
    chinese: "学习",
    pinyin: "xué xí",
    english: "to study",
  },
  {
    chinese: "下课",
    pinyin: "xià kè",
    english: "to get out of class",
  },
  {
    chinese: "去",
    pinyin: "qù",
    english: "to go",
  },
  {
    chinese: "来",
    pinyin: "lái",
    english: "to come",
  },
  {
    chinese: "学校",
    pinyin: "xué xiào",
    english: "school",
  },
  {
    chinese: "图书馆",
    pinyin: "tú shū guǎn",
    english: "library",
  },
  {
    chinese: "上课",
    pinyin: "shàng kè",
    english: "to go to class",
  },
  {
    chinese: "学习",
    pinyin: "xué xí",
    english: "to study",
  },
  {
    chinese: "教室",
    pinyin: "jiàoshì",
    english: "classroom",
  },
  {
    chinese: "开",
    pinyin: "kāi",
    english: "to open",
  },
  {
    chinese: "关",
    pinyin: "guān",
    english: "to close",
  },
  {
    chinese: "门",
    pinyin: "mén",
    english: "door",
  },
  {
    chinese: "摄像头",
    pinyin: "shè xiàng tóu",
    english: "camera",
  },
  {
    chinese: "电视",
    pinyin: "diàn shì",
    english: "TV",
  },
  {
    chinese: "电脑",
    pinyin: "diàn nǎo",
    english: "computer",
  },
  {
    chinese: "小学生",
    pinyin: "xiǎo xué shēng",
    english: "elementary school student",
  },
  {
    chinese: "留学生",
    pinyin: "liú xué shēng",
    english: "international student",
  },
  {
    chinese: "大学生",
    pinyin: "dà xué shēng",
    english: "college student",
  },
  {
    chinese: "中学生",
    pinyin: "zhōng xué shēng",
    english: "middle school student",
  },
  {
    chinese: "点",
    pinyin: "diǎn",
    english: "o’clock",
  },
  {
    chinese: "分",
    pinyin: "fèn",
    english: "minute",
  },
  {
    chinese: "秒",
    pinyin: "miǎo",
    english: "second",
  },
  {
    chinese: "刻",
    pinyin: "kè",
    english: "quarter",
  },
  {
    chinese: "小时",
    pinyin: "xiǎo shí",
    english: "hour",
  },
  {
    chinese: "半",
    pinyin: "bàn",
    english: "half",
  },
  {
    chinese: "差",
    pinyin: "chà",
    english: "be less than",
  },
  {
    chinese: "安排",
    pinyin: "ān pái",
    english: "to plan",
  },
  {
    chinese: "开始",
    pinyin: "kāi shǐ",
    english: "to start",
  },
  {
    chinese: "常常",
    pinyin: "cháng cháng",
    english: "often, usually",
  },
  {
    chinese: "有时候",
    pinyin: "yǒu shí hòu",
    english: "sometimes",
  },
  {
    chinese: "先",
    pinyin: "xiān",
    english: "before",
  },
  {
    chinese: "然后",
    pinyin: "rán hòu",
    english: "and then, after that",
  },
];

const conversation = [
  {
    who: "A",
    chinese:
      "我是留学生。我每天六点半起床。起床以后先洗澡然后吃早餐。我差一刻八点去教室上课。我们每天八点上课，十一点半下课。下午我常常去图书馆看书。晚上我学习汉语有时候看电视、上网。请问，现在几点？",
    pinyin:
      "Wǒ shì liúxuéshēng. Wǒ měitiān liù diǎn bàn qǐchuáng. Qǐchuáng yǐhòu xiān xǐzǎo ránhòu chī zǎocān. Wǒ chà yīkè bā diǎn qù jiàoshì shàngkè. Wǒmen měitiān bā diǎn shàngkè, shíyī diǎn bàn xiàkè. Xiàwǔ wǒ chángcháng qù túshū guǎn kànshū. Wǎnshàng wǒ xuéxí hànyǔ",
    english:
      "I am an international student. I get up at six thirty every day. After getting up, I take a shower and then have breakfast. I go to the classroom at a quarter to eight. We have class at eight o'clock every day, and we finish class at eleven thirty. In the afternoon, I often go to the library to read. In the evening, I study Chinese, sometimes watch TV, and go online. May I ask, what time is it now?",
  },
  {
    who: "B",
    chinese: "一点四十。你有什么事吗？",
    pinyin: "Yī diǎn sìshí. Nǐ yǒu shénme shì ma?",
    english: "One forty. Do you have anything?",
  },
  {
    who: "A",
    chinese: "我两点去图书馆看书。",
    pinyin: "Wǒ liǎng diǎn qù túshū guǎn kànshū.",
    english: "I will go to the library to read at two o'clock.",
  },
  {
    who: "B",
    chinese: "你看什么书？",
    pinyin: "Nǐ kàn shénme shū?",
    english: "What book are you reading?",
  },
  {
    who: "A",
    chinese: "我看英文书。",
    pinyin: "Wǒ kàn yīngwén shū.",
    english: "I read English books.",
  },
  {
    who: "B",
    chinese: "图书馆每天几点开门？",
    pinyin: "Túshū guǎn měitiān jǐ diǎn kāimén?",
    english: "What time does the library open every day?",
  },
  {
    who: "A",
    chinese: "早上八点开门。",
    pinyin: "Zǎoshang bā diǎn kāimén.",
    english: "The library opens at eight o'clock in the morning.",
  },
  {
    who: "B",
    chinese: "几点关门？",
    pinyin: "Jǐ diǎn guānmén?",
    english: "What time does it close?",
  },
  {
    who: "A",
    chinese: "晚上八点关门。",
    pinyin: "Wǎnshàng bā diǎn guānmén.",
    english: "It closes at eight o'clock in the evening.",
  },
  {
    who: "B",
    chinese: "太好了，明天我也去。",
    pinyin: "Tài hǎo le, míngtiān wǒ yě qù.",
    english: "Great, I will go tomorrow too.",
  },
];

// Tricks and tips in class

// To ask about the time, you can use the phrase "现在几点？" (xiànzài jǐ diǎn le?)
// To tell the time, you can use the following format:
// [Hour]点[Minute]分

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
    speech.rate = 0.8; // Slow down the speech

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
        <h1>Lesson 7 : What’s your plan for today ?</h1>
        <h2>Nǐ jīntiān yǒu shé me ānpái?</h2>
        <h3>你今天有什么安排</h3>
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