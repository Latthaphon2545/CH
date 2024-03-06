// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson8.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";

var vocabulary = [
  {
    chinese: "房子",
    pinyin: "fáng zǐ",
    english: "house",
  },
  {
    chinese: "家",
    pinyin: "jiā",
    english: "home",
  },
  {
    chinese: "楼",
    pinyin: "lóu",
    english: "building",
  },
  {
    chinese: "大楼",
    pinyin: "dà lóu",
    english: "apartment building",
  },
  {
    chinese: "小区",
    pinyin: "xiǎo qū",
    english: "residential area",
  },
  {
    chinese: "宿舍",
    pinyin: "sù shè",
    english: "dormitory",
  },
  {
    chinese: "房间",
    pinyin: "fáng jiān",
    english: "room",
  },
  {
    chinese: "客厅",
    pinyin: "kè tīng",
    english: "living room",
  },
  {
    chinese: "卧室",
    pinyin: "wò shì",
    english: "bedroom",
  },
  {
    chinese: "厨房",
    pinyin: "chú fáng",
    english: "kitchen",
  },
  {
    chinese: "卫生间",
    pinyin: "wèi shēng jiān",
    english: "bathroom",
  },
  {
    chinese: "电话",
    pinyin: "diàn huà",
    english: "telephone",
  },
  {
    chinese: "电话号码",
    pinyin: "diàn huà hào mǎ",
    english: "telephone number",
  },
  {
    chinese: "手机",
    pinyin: "shǒu jī",
    english: "cell phone",
  },
  {
    chinese: "喂",
    pinyin: "wèi",
    english: "hello (phone)",
  },
  {
    chinese: "接电话",
    pinyin: "jiē diàn huà",
    english: "to answer the phone",
  },
  {
    chinese: "等一下",
    pinyin: "děng yī xià",
    english: "wait a minute",
  },
  {
    chinese: "健美操",
    pinyin: "jiàn měi cāo",
    english: "aerobic exercise",
  },
  {
    chinese: "比赛",
    pinyin: "bǐ sài",
    english: "competition",
  },
  {
    chinese: "当",
    pinyin: "dāng",
    english: "to act as",
  },
  {
    chinese: "宴会",
    pinyin: "yàn huì",
    english: "banquet",
  },
  {
    chinese: "医院",
    pinyin: "yī yuàn",
    english: "hospital",
  },
  {
    chinese: "路",
    pinyin: "lù",
    english: "road",
  },
  {
    chinese: "离",
    pinyin: "lí",
    english: "from",
  },
  {
    chinese: "这里",
    pinyin: "zhè lǐ",
    english: "here",
  },
  {
    chinese: "远",
    pinyin: "yuǎn",
    english: "far",
  },
  {
    chinese: "知道",
    pinyin: "zhī dào",
    english: "to know",
  },
  {
    chinese: "别客气",
    pinyin: "bié kè qì",
    english: "you are welcome",
  },
];

const conversation = [
  {
    who: "A",
    chinese: "教练，我们学校有个健美操比赛。",
    pinyin: "Jiàoliàn, wǒmen xuéxiào yǒu gè jiànměi cāo bǐsài.",
    english: "Coach, our school has an aerobic exercise competition.",
  },
  {
    who: "B",
    chinese: "是吗？你参加吗？",
    pinyin: "Shì ma? Nǐ cānjiā ma?",
    english: "Really? Are you participating?",
  },
  {
    who: "A",
    chinese: "我参加。你当我们的教练，好吗？",
    pinyin: "Wǒ cānjiā. Nǐ dāng wǒmen de jiàoliàn, hǎo ma?",
    english: "Yes, I am. Would you like to be our coach?",
  },
  {
    who: "B",
    chinese: "好啊！我也想去你们学校看看。",
    pinyin: "Hǎo a! Wǒ yě xiǎng qù nǐmen xuéxiào kànkan.",
    english: "Sure! I would also like to visit your school.",
  },
  {
    who: "A",
    chinese: "你明天去，可以吗？",
    pinyin: "Nǐ míngtiān qù, kěyǐ ma?",
    english: "Would you be able to come tomorrow?",
  },
  {
    who: "B",
    chinese: "可以。我去找你吧。你住在哪里？",
    pinyin: "Kěyǐ. Wǒ qù zhǎo nǐ ba. Nǐ zhù zài nǎlǐ?",
    english: "Yes, I can. I'll come and find you. Where do you live?",
  },
  {
    who: "A",
    chinese: "我住在学校宿舍3号楼302号房间，电话是 8214675。",
    pinyin:
      "Wǒ zhù zài xuéxiào sùshè 3 hào lóu 302 hào fángjiān, diànhuà shì 8214675.",
    english:
      "I live in room 302, building 3 of the school dormitory. My phone number is 8214675.",
  },
  {
    who: "B",
    chinese: "好，明天见。",
    pinyin: "Hǎo, míngtiān jiàn.",
    english: "Okay, see you tomorrow.",
  },
  {
    who: "B",
    chinese: "喂，王杨吗？",
    pinyin: "Wèi, Wáng Yáng ma?",
    english: "Hello, is this Wang Yang?",
  },
  {
    who: "A",
    chinese: "是我。你是金经理吗？",
    pinyin: "Shì wǒ. Nǐ shì Jīn jīnglǐ ma?",
    english: "Yes, it is. Are you Manager Jin?",
  },
  {
    who: "B",
    chinese: "是的。我现在在你家楼下，你下来吧。",
    pinyin: "Shì de. Wǒ xiànzài zài nǐ jiā lóu xià, nǐ xiàlái ba.",
    english:
      "Yes, I am. I'm downstairs at your building now. Please come down.",
  },
  {
    who: "A",
    chinese: "好，我马上下来。",
    pinyin: "Hǎo, wǒ mǎshàng xiàlái.",
    english: "Okay, I'll be right down.",
  },
  {
    who: "B",
    chinese: "今天晚上有一个宴会，你也参加吧。",
    pinyin: "Jīntiān wǎnshàng yǒu yīgè yànhuì, nǐ yě cānjiā ba.",
    english: "There's a banquet tonight. Would you like to join us?",
  },
  {
    who: "A",
    chinese: "在什么地方？",
    pinyin: "Zài shénme dìfāng?",
    english: "Where is it being held?",
  },
  {
    who: "B",
    chinese: "长安饭店。",
    pinyin: "Cháng'ān fàndiàn.",
    english: "At the Chang'an Hotel.",
  },
  {
    who: "A",
    chinese: "我知道。",
    pinyin: "Wǒ zhīdào.",
    english: "I know where that is.",
  },
  {
    who: "B",
    chinese: "第二医院在长安饭店东边，离这里不太远。",
    pinyin: "Dì èr yīyuàn zài Cháng'ān fàndiàn dōngbiān, lí zhèlǐ bù tài yuǎn.",
    english:
      "The Second Hospital is to the east of the Chang'an Hotel. It's not too far from here.",
  },
  {
    who: "A",
    chinese: "谢谢你。",
    pinyin: "Xièxiè nǐ.",
    english: "Thank you.",
  },
  {
    who: "B",
    chinese: "别客气。",
    pinyin: "Bié kèqì.",
    english: "You're welcome.",
  },
  {
    who: "A",
    chinese: "这里真漂亮！",
    pinyin: "Zhèlǐ zhēn piàoliang!",
    english: "This place is really beautiful!",
  },
  {
    who: "B",
    chinese: "是啊。你在这里玩得开心吧。",
    pinyin: "Shì a. Nǐ zài zhèlǐ wán de kāixīn ba.",
    english: "Yes, it is. Have fun here.",
  },
  {
    who: "A",
    chinese: "谢谢你的邀请。",
    pinyin: "Xièxiè nǐ de yāoqǐng.",
    english: "Thank you for inviting me.",
  },
  {
    who: "A",
    chinese: "你好，我叫王杨。",
    pinyin: "Nǐ hǎo, wǒ jiào Wáng Yáng.",
    english: "Hello, my name is Wang Yang.",
  },
  {
    who: "C",
    chinese: "你好，我叫李娜。",
    pinyin: "Nǐ hǎo, wǒ jiào Lǐ Nà.",
    english: "Hello, my name is Li Na.",
  },
  {
    who: "A",
    chinese: "你是做什么的？",
    pinyin: "Nǐ shì zuò shénme de?",
    english: "What do you do for a living?",
  },
  {
    who: "C",
    chinese: "我是一名医生。",
    pinyin: "Wǒ shì yīmíng yīshēng.",
    english: "I'm a doctor.",
  },
  {
    who: "A",
    chinese: "你在哪家医院工作？",
    pinyin: "Nǐ zài nǎ jiā yīyuàn gōngzuò?",
    english: "Which hospital do you work at?",
  },
  {
    who: "C",
    chinese: "我在第二医院工作。",
    pinyin: "Wǒ zài Dì èr yīyuàn gōngzuò.",
    english: "I work at the Second Hospital.",
  },
  {
    who: "A",
    chinese: "哦，我知道那家医院。",
    pinyin: "Ó, wǒ zhīdào nà jiā yīyuàn.",
    english: "Oh, I know that hospital.",
  },
  {
    who: "C",
    chinese: "你也住在那附近吗？",
    pinyin: "Nǐ yě zhù zài nà fùjìn ma?",
    english: "Do you also live in that area?",
  },
  {
    who: "A",
    chinese: "是的。我住在阳光小区。",
    pinyin: "Shì de. Wǒ zhù zài Yángguāng xiǎoqū.",
    english: "Yes, I do. I live in the Yangguang Residential Area.",
  },
  {
    who: "C",
    chinese: "我也住在那附近。",
    pinyin: "Wǒ yě zhù zài nà fùjìn.",
    english: "I also live in that area.",
  },
  {
    who: "A",
    chinese: "真巧！",
    pinyin: "Zhēn qiǎo!",
    english: "What a coincidence!",
  },
  {
    who: "C",
    chinese: "真巧！",
    pinyin: "Zhēn qiǎo!",
    english: "What a coincidence!",
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
        <h1>Lesson 8 : I live in Yangguang residential.</h1>
        <h2>Wǒ zhù zài yángguāng xiǎoqū</h2>
        <h3>我住在阳光小区</h3>
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
