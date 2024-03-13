// MatchingGame.js
import React, { useState, useEffect } from "react";
import "./Lesson6.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";

var vocabulary = [
  { chinese: "月", pinyin: "yuè", english: "month" },
  { chinese: "去年", pinyin: "qùnián", english: "last year" },
  { chinese: "号", pinyin: "hào", english: "date" },
  { chinese: "星期", pinyin: "xīngqí", english: "week" },
  { chinese: "回国", pinyin: "huíguó", english: "to return to one’s home country" },
  { chinese: "看", pinyin: "kàn", english: "to visit, to see" },
  { chinese: "回来", pinyin: "huílái", english: "to come back" },
  { chinese: "明年", pinyin: "míngnián", english: "next year" },
  { chinese: "生日", pinyin: "shēngrì", english: "birthday" },
  { chinese: "星期日", pinyin: "xīngqírì", english: "Sunday" },
  { chinese: "巧", pinyin: "qiǎo", english: "coincidental" },
  { chinese: "不好意思", pinyin: "bù hǎoyìsi", english: "excuse me, I’m sorry" },
  { chinese: "前天", pinyin: "qiántiān", english: "the day before yesterday" },
  { chinese: "昨天", pinyin: "zuótiān", english: "yesterday" },
  { chinese: "今天", pinyin: "jīntiān", english: "today" },
  { chinese: "明天", pinyin: "míngtiān", english: "tomorrow" },
  { chinese: "后天", pinyin: "hòutiān", english: "the day after tomorrow" },
];

var vocabularyMonth = [
  { chinese: "一月", pinyin: "yīyuè", english: "January" },
  { chinese: "二月", pinyin: "èryuè", english: "February" },
  { chinese: "三月", pinyin: "sānyuè", english: "March" },
  { chinese: "四月", pinyin: "sìyuè", english: "April" },
  { chinese: "五月", pinyin: "wǔyuè", english: "May" },
  { chinese: "六月", pinyin: "liùyuè", english: "June" },
  { chinese: "七月", pinyin: "qīyuè", english: "July" },
  { chinese: "八月", pinyin: "bāyuè", english: "August" },
  { chinese: "九月", pinyin: "jiǔyuè", english: "September" },
  { chinese: "十月", pinyin: "shíyuè", english: "October" },
  { chinese: "十一月", pinyin: "shíyīyuè", english: "November" },
  { chinese: "十二月", pinyin: "shíèryuè", english: "December" },
];

const conversation = [
  {
    who: "A",
    pinyin: "Nǐ hǎo!",
    chinese: "你好！",
    english: "Hello!",
  },
  {
    who: "B",
    pinyin: "Nǐ hǎo!",
    chinese: "你好！",
    english: "Hello!",
  },
  {
    who: "A",
    pinyin: "Nǐ shì nǎ guó rén?",
    chinese: "你生日是几月几号？",
    english: "What is your birthday?",
  },
  {
    who: "B",
    pinyin: "Wǒ de shēngrì shì 10 yuè 1 rì.",
    chinese: "我的生日是10月1日。",
    english: "My birthday is on October 1st.",
  },
  {
    who: "A",
    pinyin: "Wā, qiǎo le! Wǒ de shēngrì yě shì 10 yuè 1 rì!",
    chinese: "哇，巧了！我的生日也是10月1日！",
    english: "Wow, what a coincidence! My birthday is also on October 1st!",
  },
  {
    who: "B",
    pinyin: "Shì ma? Nà wǒmen zhēn shì tóng yī tiān shēngrì!",
    chinese: "是吗？那我们真是同一天生日！",
    english: "Really? Then we have the same birthday!",
  },
  {
    who: "A",
    pinyin: "Duì a! Nǐ xiǎng zěnme guò shēngrì?",
    chinese: "今年10月1日是星期几？",
    english: "What day of the week is October 1st this year?",
  },
  {
    who: "B",
    pinyin: "Jīntiān shì xīngqísì.",
    chinese: "今年10月1日是星期三。",
    english: "October 1st is on Wednesday this year.",
  },
  {
    who: "A",
    pinyin: "Nà wǒmen nà tiān kěyǐ yīqǐ guò shēngrì!",
    chinese: "那我们那天可以一起过生日！",
    english: "Then we can celebrate our birthday together that day!",
  },
  {
    who: "B",
    pinyin: "Hǎo a! Wǒmen kěyǐ yīqǐ chī dàcān, kàn diànyǐng, huòzhě qù wán.",
    chinese: "好啊！我们可以一起吃饭，看电影，或者去玩。",
    english: "Sure! We can have a meal together, watch a movie, or go out and have fun.",
  },
  {
    who: "A",
    pinyin: "Tài bàng le! Wǒ qídài nà tiān!",
    chinese: "太棒了！我期待那天！",
    english: "That's great! I'm looking forward to that day!",
  },
  {
    who: "B",
    pinyin: "Wǒ yě shì!",
    chinese: "我也是！",
    english: "Me too!",
  },
  {
    who: "A",
    pinyin: "Wǒmen xià gè yuè kěyǐ yīqǐ chūqù wán ma?",
    chinese: "对了，你下个月什么时候有空？",
    english: "By the way, when are you available next month?",
  },
  {
    who: "B",
    pinyin: "Xià gè yuè wǒ 10 yuè 1 rì dào 10 yuè 7 rì yǒu kòng.",
    chinese: "下个月我10月1日到10月7日有空。",
    english: "I'm available from October 1st to October 7th next month.",
  },
  {
    who: "A",
    pinyin: "Nà tài hǎo le! Wǒmen kěyǐ yīqǐ chūqù wán.",
    chinese: "那太好了！我们可以一起出去玩。",
    english: "That's great! We can go out together.",
  },
  {
    who: "B",
    pinyin: "Hǎo a! Wǒmen kěyǐ qù páshān, yěcān, huòzhě qù lǚxíng.",
    chinese: "好啊！我们可以去爬山，野餐，或者去旅行。",
    english: "Sure! We can go hiking, have a picnic, or go on a trip.",
  },
  {
    who: "A",
    pinyin: "Tài bàng le! Wǒ qídài xià gè yuè!",
    chinese: "太棒了！我期待下个月！",
    english: "That's great! I'm looking forward to next month!",
  },
  {
    who: "B",
    pinyin: "Wǒ yě shì!",
    chinese: "我也是！",
    english: "Me too!",
  },
];

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
    speech.rate = 0.5; // Slow down the speech

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

      <div className="Vocabulary">
        <h1>Month</h1>
        <ul>
          {vocabularyMonth.map((item, index) => (
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
        <h1>Lesson 6 : October 1st is my birthday.</h1>
        <h2>10 Yuè 1 rì shì wǒ de shēngrì</h2>
        <h3>10月1日是我的生日</h3>
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
