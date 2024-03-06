// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson10.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";

var vocabulary = [
  { chinese: "季节", pinyin: "jì jié", english: "season" },
  { chinese: "夏天", pinyin: "xià tiān", english: "summer" },
  { chinese: "雨季", pinyin: "yǔ jì", english: "rainy season" },
  { chinese: "凉季", pinyin: "liáng jì", english: "cool season" },
  { chinese: "天气", pinyin: "tiān qì", english: "weather" },
  { chinese: "热", pinyin: "rè", english: "hot" },
  { chinese: "凉快", pinyin: "liáng kuài", english: "cool" },
  { chinese: "冷", pinyin: "lěng", english: "cold" },
  { chinese: "温暖", pinyin: "wēn nuǎn", english: "warm" },
  { chinese: "衣服", pinyin: "yī fú", english: "clothes" },
  { chinese: "毛衣", pinyin: "máo yī", english: "sweater" },
  { chinese: "外套", pinyin: "wài tào", english: "coat" },
  { chinese: "羽绒服", pinyin: "yǔ róng fú", english: "down jacket" },
  { chinese: "裤子", pinyin: "kù zǐ", english: "pants" },
  { chinese: "裙子", pinyin: "qún zǐ", english: "skirt" },
  { chinese: "件", pinyin: "jiàn", english: "piece" },
  {
    chinese: "一件衣服",
    pinyin: "yī jiàn yī fú",
    english: "one piece of clothing",
  },
  { chinese: "两件毛衣", pinyin: "liǎng jiàn máo yī", english: "two sweaters" },
  { chinese: "三件裤子", pinyin: "sān jiàn kù zǐ", english: "three pants" },
  { chinese: "医院", pinyin: "yī yuàn", english: "hospital" },
  { chinese: "医生", pinyin: "yī shēng", english: "doctor" },
  { chinese: "护士", pinyin: "hù shì", english: "nurse" },
  { chinese: "生病", pinyin: "shēng bìng", english: "to be sick" },
  { chinese: "看病", pinyin: "kàn bìng", english: "to see a doctor" },
  { chinese: "药", pinyin: "yào", english: "medicine" },
  { chinese: "感冒", pinyin: "gǎn mào", english: "to have a cold" },
  { chinese: "发烧", pinyin: "fā shāo", english: "to have a fever" },
  { chinese: "头疼", pinyin: "tóu téng", english: "to have a headache" },
  { chinese: "肚子疼", pinyin: "dù zi téng", english: "to have a stomachache" },
  { chinese: "跑步", pinyin: "pǎo bù", english: "to run" },
  { chinese: "慢", pinyin: "màn", english: "slow" },
  { chinese: "快", pinyin: "kuài", english: "fast" },
  { chinese: "新", pinyin: "xīn", english: "new" },
  { chinese: "旧", pinyin: "jiù", english: "old" },
  { chinese: "买", pinyin: "mǎi", english: "to buy" },
  { chinese: "卖", pinyin: "mài", english: "to sell" },
  { chinese: "厚", pinyin: "hòu", english: "thick" },
  { chinese: "薄", pinyin: "báo", english: "thin" },
  { chinese: "一趟", pinyin: "yī tàng", english: "a round trip" },
  { chinese: "怎么", pinyin: "zěn me", english: "how" },
  { chinese: "怎么样", pinyin: "zěn me yàng", english: "how about" },
  { chinese: "这么", pinyin: "zhè me", english: "so, such" },
  { chinese: "就", pinyin: "jiù", english: "as soon as" },
  { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit" },
  { chinese: "但是", pinyin: "dàn shì", english: "but" },
  { chinese: "有空", pinyin: "yǒu kòng", english: "have time off" },
  { chinese: "特别", pinyin: "tè bié", english: "particularly" },
  { chinese: "穿", pinyin: "chuān", english: "to put on" },
  { chinese: "商场", pinyin: "shāng chǎng", english: "shopping mall" },
  { chinese: "真", pinyin: "zhēn", english: "really" },
  { chinese: "都", pinyin: "dōu", english: "all" },
  { chinese: "不行", pinyin: "bú xíng", english: "can’t do it" },
  { chinese: "还", pinyin: "hái", english: "still, yet" },
];

const conversation = [
  {
    who: "A",
    pinyin:
      "Jīnnián dōngtiān běijīng tèbié lěng, hěnduō tóngxué dōu gǎnmàole, wǒ yě gǎnmàole. Wǒmen tàiguó dōngtiān bù tài lěng, bùyòng chuān hěn hòu de yīfú, kěshì zài běijīng bùxíng",
    chinese:
      "今年冬天北京特别冷，很多同学都感冒了，我也感冒了。我们泰国冬天不太冷，不用穿很厚的衣服，可是在北京不行。",
    english:
      " This winter in Beijing is very cold, many students have caught a cold, I have also caught a cold. In Thailand, the winter is not too cold, we don't need to wear very thick clothes, but in Beijing it's not possible.",
  },
  {
    who: "B",
    pinyin:
      "Zuótiān wǒ qùle yī tàng shāngchǎng. Shāngchǎng lǐ, dōngtiān de yīfú zhēn duō. Wǒ mǎile yī jiàn máoyī, hái mǎile yī jiàn yǔróngfú.",
    chinese:
      "昨天我去了一趟商场。商场里，冬天的衣服真多。我买了一件毛衣，还买了一件羽绒服。",
    english:
      "Yesterday I went to the mall. There were so many winter clothes in the mall. I bought a sweater and also bought a down jacket.",
  },
  {
    who: "A",
    pinyin:
      "Duìle, běijīng de dōngtiān zhēn de hěn nánguò. Wǒ chuānle sān jiàn yīfú, háishì juéde lěng.",
    chinese: "对了，北京的冬天真的很难过。我穿了三件衣服，还是觉得冷。",
    english:
      "By the way, winter in Beijing is really tough. I wore three pieces of clothing and still felt cold.",
  },
  {
    who: "B",
    pinyin: "Nǐ qù kàn yīshēng le ma?",
    chinese: "你去看医生了吗？",
    english: "Did you go see a doctor?",
  },
  {
    who: "A",
    pinyin: "Kànle, yīshēng shuō yào duō xiūxi, duō hē shuǐ.",
    chinese: "看了，医生说要多休息，多喝水。",
    english:
      "Yes, I did. The doctor said I need to rest more and drink more water.",
  },
  {
    who: "B",
    pinyin: "Nǐ yào hǎohǎo zhàogù zìjǐ, bié zài gǎnmàole.",
    chinese: "你要好好照顾自己，别再感冒了。",
    english:
      "You need to take good care of yourself and not catch a cold again.",
  },
  {
    who: "A",
    pinyin: "Xièxiè nǐ de guānxīn. Nǐ yě zhùyì bǎonuǎn, bié dòngzhe le.",
    chinese: "谢谢你的关心。你也注意保暖，别冻着了。",
    english:
      "Thank you for your concern. You should also keep warm and not get cold.",
  },
  {
    who: "B",
    pinyin: "Hǎo de, wǒ huì de.",
    chinese: "好的，我会的。",
    english: "Okay, I will.",
  },
  {
    who: "A",
    pinyin: "Duìle, nǐ jīntiān yào qù nǎlǐ?",
    chinese: "对了，你今天要去哪里？",
    english: "By the way, where are you going today?",
  },
  {
    who: "B",
    pinyin: "Wǒ yào qù kànwàng yīgè shēngbìng de péngyǒu.",
    chinese: "我要去看望一个生病的朋友。",
    english: "I'm going to visit a sick friend.",
  },
  {
    who: "A",
    pinyin: "Ó, nà nǐ yào dài diǎn shuǐguǒ qù kàn tā.",
    chinese: "哦，那你要带点水果去看她。",
    english: "Oh, then you should bring some fruits to visit her.",
  },
  {
    who: "B",
    pinyin: "Hǎo de, wǒ yǐjīng mǎi hǎole.",
    chinese: "好的，我已经买好了。",
    english: "Okay, I've already bought them.",
  },
  {
    who: "A",
    pinyin: "Nà zhù nǐ péngyǒu zǎorì kāngfù.",
    chinese: "那祝你朋友早日康复。",
    english: "Well, I wish your friend a speedy recovery.",
  },
  {
    who: "B",
    pinyin: "Xièxiè.",
    chinese: "谢谢。",
    english: "Thank you.",
  },
  {
    who: "A",
    pinyin: "Wǒ yào zǒule, zàijiàn.",
    chinese: "我要走了，再见。",
    english: "I have to go now, goodbye.",
  },
  {
    who: "B",
    pinyin: "Zàijiàn.",
    chinese: "再见。",
    english: "Goodbye.",
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
        <h1>Lesson 10 : I bought a sweater</h1>
        <h2>Wǒ mǎile yī jiàn máoyī</h2>
        <h3>我买了一件毛衣</h3>
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
