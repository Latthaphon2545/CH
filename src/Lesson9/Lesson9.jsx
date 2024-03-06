import React, { useState } from "react";
import "./Lesson9.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";

var vocabulary = [
  {
    chinese: "太极拳",
    pinyin: "tàijí quán",
    english: "tai chi",
  },
  {
    chinese: "课",
    pinyin: "kè",
    english: "class",
  },
  {
    chinese: "书法",
    pinyin: "shūfǎ",
    english: "calligraphy",
  },
  {
    chinese: "体操",
    pinyin: "tǐcāo",
    english: "gymnastics",
  },
  {
    chinese: "数学",
    pinyin: "shùxué",
    english: "math",
  },
  {
    chinese: "中文",
    pinyin: "zhōngwén",
    english: "Chinese",
  },
  {
    chinese: "学院",
    pinyin: "xuéyuàn",
    english: "college, institute",
  },
  {
    chinese: "兴趣",
    pinyin: "xìngqù",
    english: "interest",
  },
  {
    chinese: "感兴趣",
    pinyin: "gǎn xìngqù",
    english: "to be interested in",
  },
  {
    chinese: "可是",
    pinyin: "kěshì",
    english: "but, however",
  },
  {
    chinese: "还是",
    pinyin: "hái shì",
    english: "or",
  },
  {
    chinese: "最",
    pinyin: "zuì",
    english: "most, very",
  },
  {
    chinese: "报名",
    pinyin: "bàomíng",
    english: "to sign up",
  },
  {
    chinese: "没错",
    pinyin: "méi cuò",
    english: "right, exactly",
  },
  {
    chinese: "觉得",
    pinyin: "juédé",
    english: "to think, to feel",
  },
  {
    chinese: "爱好",
    pinyin: "àihào",
    english: "hobby",
  },
  {
    chinese: "非常",
    pinyin: "fēicháng",
    english: "very",
  },
];

const conversation = [
  {
    who: "A",
    chinese: "本学期语言学院开设了六门兴趣课程。",
    pinyin: "Běn xuéqí yǔyán xuéyuàn kāishè le liù mén xìngqù kèchéng.",
    english:
      "This semester, the Language Institute is offering six interest courses.",
  },
  {
    who: "B",
    chinese:
      "我对书法、太极拳、中文和体操都很感兴趣，可是这四门课上课时间一样，我要选书法还是太极拳呢？",
    pinyin:
      "Wǒ duì shūfǎ, tài jí quán, zhōngwén hé tǐcāo dōu hěn gǎn xìngqù, kěshì zhè sì mén kè shàngkè shíjiān yīyàng, wǒ yào xuǎn shūfǎ hái shì tài jí quán ne?",
    english:
      "I'm interested in calligraphy, tai chi, Chinese and gymnastics, but the class times for these four courses are the same. Should I choose calligraphy or tai chi?",
  },
  {
    who: "A",
    chinese: "本学期我想选太极拳，下学期我再选书法吧。",
    pinyin:
      "Běn xuéqí wǒ xiǎng xuǎn tài jí quán, xià xuéqí wǒ zài xuǎn shūfǎ ba.",
    english:
      "This semester I want to choose tai chi, and next semester I will choose calligraphy.",
  },
  {
    who: "B",
    chinese: "山口，你喜欢什么运动？",
    pinyin: "Yāmǎgǔchǐ, nǐ xǐhuan shénme yùndòng?",
    english: "Yamaguchi, what kind of sports do you like?",
  },
  {
    who: "A",
    chinese: "我喜欢跑步。我觉得跑步对身体很好。",
    pinyin: "Wǒ xǐhuan pǎobù. Wǒ juédé pǎobù duì shēntǐ hěn hǎo.",
    english: "I like running. I think running is good for the body.",
  },
  {
    who: "B",
    chinese: "你早上跑步还是晚上跑步？",
    pinyin: "Nǐ zǎoshang pǎobù hái shì wǎnshang pǎobù?",
    english: "Do you run in the morning or in the evening?",
  },
  {
    who: "A",
    chinese: "我一般晚上跑步。",
    pinyin: "Wǒ yībān wǎnshang pǎobù.",
    english: "I usually run in the evening.",
  },
  {
    who: "B",
    chinese: "马丁，你有什么爱好？",
    pinyin: "Mǎdīng, nǐ yǒu shénme àihào?",
    english: "Martin, what are your hobbies?",
  },
  {
    who: "A",
    chinese: "我喜欢踢足球，也喜欢打篮球。",
    pinyin: "Wǒ xǐhuan tī zúqiú, yě xǐhuan dǎ lánqiú.",
    english: "I like to play soccer and I also like to play basketball.",
  },
  {
    who: "B",
    chinese: "我最喜欢太极拳，明天我去报名。",
    pinyin: "Wǒ zuì xǐhuan tài jí quán, míngtiān wǒ qù bǎomíng.",
    english: "I like tai chi the most, I will sign up tomorrow.",
  },
  {
    who: "A",
    chinese: "很好，你喜欢什么就学什么。",
    pinyin: "Hěn hǎo, nǐ xǐhuan shénme jiù xué shénme.",
    english: "Good, learn what you like.",
  },
  {
    who: "A",
    chinese: "对了，你们喝点什么？",
    pinyin: "Duì le, nǐmen hē diǎn shénme?",
    english: "Oh right, what would you like to drink?",
  },
  {
    who: "B",
    chinese: "我喜欢茶。你有什么茶？",
    pinyin: "Wǒ xǐhuan chá. Nǐ yǒu shénme chá?",
    english: "I like tea. What kind of tea do you have?",
  },
  {
    who: "A",
    chinese: "我有红茶和绿茶。你要红茶还是绿茶？",
    pinyin: "Wǒ yǒu hóngchá hé lǜchá. Nǐ yào hóngchá hái shì lǜchá?",
    english:
      "I have black tea and green tea. Do you want black tea or green tea?",
  },
  {
    who: "B",
    chinese: "我要一杯红茶。",
    pinyin: "Wǒ yào yī bēi hóngchá.",
    english: "I want a cup of black tea.",
  },
  {
    who: "A",
    chinese: "玛丽，你要茶还是咖啡？",
    pinyin: "Mǎlì, nǐ yào chá hái shì kāfēi?",
    english: "Mary, do you want tea or coffee?",
  },
  {
    who: "B",
    chinese: "我要咖啡。",
    pinyin: "Wǒ yào kāfēi.",
    english: "I want coffee.",
  },
  {
    who: "A",
    chinese: "你也喜欢喝咖啡吗？我听说你非常喜欢喝咖啡，是吗？",
    pinyin:
      "Nǐ yě xǐhuan hē kāfēi ma? Wǒ tīngshuō nǐ fēicháng xǐhuan hē kāfēi, shì ma?",
    english:
      "Do you also like to drink coffee? I heard you really like to drink coffee, is that right?",
  },
  {
    who: "B",
    chinese: "是的，我非常喜欢喝咖啡。",
    pinyin: "Shì de, wǒ fēicháng xǐhuan hē kāfēi.",
    english: "Yes, I really like to drink coffee.",
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
        <h1>Lesson 9 : What would you like, tea or coffee?</h1>
        <h2>Nǐ yào hē diǎn shénme?</h2>
        <h3>你要喝点什么？</h3>
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
