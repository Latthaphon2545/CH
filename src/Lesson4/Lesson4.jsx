// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson4.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";

var vocabulary = [
  {
    pinyin: "jiā tíng",
    chinese: "家庭",
    english: "family",
  },
  {
    pinyin: "dà jiā tíng",
    chinese: "大家庭",
    english: "extended family",
  },
  {
    pinyin: "jiā rén",
    chinese: "家人",
    english: "family member",
  },
  {
    pinyin: "fù mǔ",
    chinese: "父母",
    english: "parents",
  },
  {
    pinyin: "xiōng dì jiě mèi",
    chinese: "兄弟姐妹",
    english: "brothers and sisters",
  },
  {
    pinyin: "nán hái zǐ",
    chinese: "男孩子",
    english: "boy",
  },
  {
    pinyin: "nǚhái zǐ",
    chinese: "女孩子",
    english: "girl",
  },
  {
    pinyin: "hái zǐ",
    chinese: "孩子",
    english: "child",
  },
  {
    pinyin: "shuāng bāo tāi",
    chinese: "双胞胎",
    english: "twins",
  },
  {
    pinyin: "wài gōng",
    chinese: "外公",
    english: "grandfather",
  },
  {
    pinyin: "wài po",
    chinese: "外婆",
    english: "grandmother",
  },
  {
    pinyin: "nǎi nai",
    chinese: "奶奶",
    english: "grandmother",
  },
  {
    pinyin: "yé ye",
    chinese: "爷爷",
    english: "grandfather",
  },
  {
    pinyin: "mā ma",
    chinese: "妈妈",
    english: "mother",
  },
  {
    pinyin: "bà ba",
    chinese: "爸爸",
    english: "father",
  },
  {
    pinyin: "gè rén",
    chinese: "个人",
    english: "person",
  },
  {
    pinyin: "xiǎng",
    chinese: "想",
    english: "miss, think",
  },
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
    pinyin: "duō dà",
    chinese: "多大",
    english: "how old",
  },
  {
    pinyin: "yǒu",
    chinese: "有",
    english: "have",
  },
  {
    pinyin: "jīng jù",
    chinese: "京剧",
    english: "Beijing opera",
  },
  {
    pinyin: "shēng yīn",
    chinese: "声音",
    english: "voice",
  },
  {
    pinyin: "zhēn",
    chinese: "真",
    english: "really",
  },
  {
    pinyin: "hǎo tīng",
    chinese: "好听",
    english: "pleasing to the ear",
  },
  {
    pinyin: "niánjì",
    chinese: "年纪",
    english: "age",
  },
  {
    pinyin: "fēi cháng",
    chinese: "非常",
    english: "very",
  },
  {
    pinyin: "cháng cháng",
    chinese: "常常",
    english: "often",
  },
  {
    pinyin: "máng",
    chinese: "忙",
    english: "busy",
  },
  {
    chinese: "小区",
    pinyin: "xiǎo qū",
    english: "community",
  },
  {
    pinyin: "piào liang",
    chinese: "漂亮",
    english: "beautiful",
  },
  {
    pinyin: "yī gòng",
    chinese: "一共",
    english: "total",
  },
  {
    pinyin: "hé",
    chinese: "和",
    english: "and",
  },
  {
    pinyin: "yī qǐ",
    chinese: "一起",
    english: "together",
  },
  {
    pinyin: "lǜ shī",
    chinese: "律师",
    english: "lawyer",
  },
  {
    pinyin: "zhù",
    chinese: "住",
    english: "live",
  },
  {
    english: "sister-in-law",
    pinyin: "sǎo zǐ",
    chinese: "嫂子",
  },
];

const conversation = [
  {
    who: "A",
    pinyin: "Nǐ xiǎng wàipóle?",
    chinese: "你想外婆了吗？",
    english: "Do you miss your grandma?",
  },
  {
    who: "B",
    pinyin: "Duì, wǒ māmā shuō wàipó zài běijīng.",
    chinese: "对，我妈妈说外婆在北京。",
    english: "Yes, my mom said my grandma is in Beijing.",
  },
  {
    who: "A",
    pinyin: "Nǐ jiā yǒu jǐ gèrén?",
    chinese: "你家有几个人？",
    english: "How many people are there in your family?",
  },
  {
    who: "B",
    pinyin: "Wǒ jiā yǒu sì gèrén, bàba, māmā, mèimei hé wǒ.",
    chinese: "我家有四个人，爸爸，妈妈，妹妹和我。",
    english: "There are four people in my family, dad, mom, sister and me.",
  },
  {
    who: "A",
    pinyin: "A! Nǐ hái yǒu gè mèimei! Nǐ bàba zuò shénme gōngzuò?",
    chinese: "啊！你还有个妹妹！你爸爸做什么工作？",
    english: "Oh! You have a sister! What does your dad do?",
  },
  {
    who: "B",
    pinyin: "Tā shì lǜshī. Tā fēicháng máng, chángcháng bù zài jiā.",
    chinese: "他是律师。他非常忙，常常不在家。",
    english: "He is a lawyer. He is very busy and often not at home.",
  },
  {
    who: "A",
    pinyin: "Nǐ māmā yě gōngzuò ma?",
    chinese: "你妈妈也工作吗？",
    english: "Does your mom work too?",
  },
  {
    who: "B",
    pinyin: "Yě gōngzuò, tā shì lǎoshī.",
    chinese: "也工作，她是老师。",
    english: "She also works, she is a teacher.",
  },
  {
    who: "A",
    pinyin: "nǐ zài měiguó gōngzuò ma?",
    chinese: "你在美国工作吗？",
    english: "do you work in the United States?",
  },
  {
    who: "B",
    pinyin:
      "Wǒ bù gōngzuò bàba xīwàng wǒ qù yínháng gōngzuò, kěshì wǒ bù xǐhuān.",
    chinese: "我不工作，爸爸希望我去银行工作，可是我不喜欢。",
    english:
      "I don't work, my dad wants me to work in a bank, but I don't like it.",
  },
  {
    who: "A",
    english: "Do you have any siblings?",
    pinyin: "Nǐ yǒu xiōngdì jiěmèi ma?",
    chinese: "你有兄弟姐妹吗？",
  },
  {
    who: "B",
    english: "I only have one child in my family. What about you?",
    pinyin: "Wǒ jiā zhǐ yǒu yī gè háizi. Nǐ ne?",
    chinese: "我家只有一个孩子。你呢？",
  },
  {
    who: "A",
    english:
      "I have a sister. She is 21 years old, we are twins. She is also very beautiful.",
    pinyin:
      "Wǒ yǒu yī gè mèimei. Tā èrshí yī suì, wǒmen shì shuāngbāotāi. Tā yě hěn piàoliang",
    chinese: "我有一个妹妹。她二十一岁，我们是双胞胎。她也很漂亮",
  },
  {
    who: "B",
    pinyin: "Nǐ yīgè rén zhù ma?",
    chinese: "你一个人住吗？",
    english: "Do you live alone?",
  },
  {
    who: "A",
    pinyin: "Bù, wǒ hé fùmǔ yīqǐ zhù. Nǐ ne?",
    chinese: "不，我和父母一起住。你呢？",
    english: "No, I live with my parents. What about you?",
  },
  {
    who: "B",
    pinyin: "Xiànzài wǒ yīgè rén zhù. Wǒ jiā rén dōu zài hánguó.",
    chinese: "现在我一个人住。我家人都在韩国。",
    english: "Now I live alone. My family is all in Korea.",
  },
  {
    who: "A",
    pinyin: " Nǐ jiā dōu yǒu shénme rén?",
    chinese: "你家都有什么人？",
    english: "Who is in your family?",
  },
  {
    who: "B",
    pinyin:
      "Yéyé, nǎinai, māmā, bàba, hái yǒu gēgē, sǎozi hé tāmen de háizi, yīgòng 10 kǒu (gè) rén.",
    chinese:
      "爷爷，奶奶，妈妈，爸爸，还有哥哥，嫂子和他们的孩子，一共10口(个)人。",
    english:
      "Grandpa, grandma, mom, dad, brother, sister-in-law and their children, a total of 10 people.",
  },
  {
    who: "A",
    pinyin: "Zhēnshi gè dà jiātíng. Nǐmen dōu zhù zài yīqǐ ma?",
    chinese: "真是个大家庭。你们都住在一起吗？",
    english: "It's a big family. Do you all live together?",
  },
  {
    who: "B",
    pinyin: "Duì, wǒmen yīqǐ zhù.",
    chinese: "对，我们一起住。",
    english: "Yes, we live together.",
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
        <h1>Lesson 4 : I like a Big family.</h1>
        <h2>Wǒ xǐhuān dà jiātíng</h2>
        <h3>我喜欢大家庭</h3>
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