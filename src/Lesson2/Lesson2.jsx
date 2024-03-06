// MatchingGame.js
import React, { useState, useEffect } from "react";
import "./Lesson2.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";

var vocabulary = [
  { chinese: "你", english: "you", pinyin: "nǐ" },
  { chinese: "好", english: "well, good", pinyin: "hǎo" },
  { chinese: "我", english: "I", pinyin: "wǒ" },
  { chinese: "是", english: "to be", pinyin: "shì" },
  { chinese: "您", english: "you (polite)", pinyin: "nín" },
  { chinese: "你们", english: "you (plural)", pinyin: "nǐmen" },
  { chinese: "她、他", english: "she, he", pinyin: "tā" },
  { chinese: "谁", english: "who", pinyin: "shéi" },
  { chinese: "老师", english: "teacher", pinyin: "lǎoshī" },
  { chinese: "姓", english: "surname", pinyin: "xìng" },
  { chinese: "叫", english: "to call, to be called", pinyin: "jiào" },
  { chinese: "什么", english: "what", pinyin: "shénme" },
  { chinese: "名字", english: "name", pinyin: "míngzi" },
  { chinese: "对不起", english: "sorry", pinyin: "duìbuqǐ" },
  { chinese: "没关系", english: "It doesn't matter", pinyin: "méiguānxi" },
  { chinese: "学生", english: "student", pinyin: "xuésheng" },
  { chinese: "吗", english: "?", pinyin: "ma" },
  { chinese: "贵姓", english: "your surname", pinyin: "guìxìng" },
  { chinese: "请问", english: "May I ask...?", pinyin: "qǐngwèn" },
  { chinese: "认识", english: "to meet, to know", pinyin: "rènshi" },
  { chinese: "很", english: "very", pinyin: "hěn" },
  { chinese: "高兴", english: "happy", pinyin: "gāoxìng" },
  { chinese: "也", english: "too, also", pinyin: "yě" },
  { chinese: "介绍", english: "to introduce", pinyin: "jièshào" },
  { chinese: "一下儿", english: "a bit, a little", pinyin: "yíxiàr" },
  { chinese: "嗯", english: "eh", pinyin: "ēn" },
  { chinese: "从", english: "from", pinyin: "cóng" },
  { chinese: "来", english: "come", pinyin: "lái" },
  { chinese: "姓名", english: "full name", pinyin: "xìngmíng" },
  { chinese: "国籍", english: "nationality", pinyin: "guójí" },
  { chinese: "再", english: "again, once more", pinyin: "zài" },
  { chinese: "说", english: "to say, to speak", pinyin: "shuō" },
  { chinese: "一", english: "one", pinyin: "yī" },
  { chinese: "哪", english: "which", pinyin: "nǎ" },
  { chinese: "国", english: "country, state", pinyin: "guó" },
  { chinese: "但", english: "but", pinyin: "dàn" },
  { chinese: "人", english: "people, person", pinyin: "rén" },
  { chinese: "哦", english: "oh (expressing understanding)", pinyin: "ó" },
  { chinese: "护照", english: "passport", pinyin: "hùzhào" },
  { chinese: "谢谢", english: "thanks", pinyin: "xièxie" },
  { chinese: "不", english: "no, not", pinyin: "bù" },
  { chinese: "爸爸", english: "father", pinyin: "bàba" },
  { chinese: "妈妈", english: "mother", pinyin: "māma" },
  { chinese: "地方", english: "place, local", pinyin: "dìfang" },
];

const conversation = [
  {
    who: "A",
    pinyin: "Nǐ hǎo! Wǒ jiào Lì Míng.",
    chinese: "你好！我叫李明。",
    english: "Hello! My name is Li Ming.",
  },
  {
    who: "B",
    pinyin: "Nǐ hǎo, Lì Míng! Wǒ jiào Shān Zhōng. Hěn gāoxìng rènshi nǐ!",
    chinese: "你好，李明！我叫山中。很高兴认识你！",
    english: "Hello, Li Ming! My name is Shan Zhong. Nice to meet you!",
  },
  {
    who: "A",
    pinyin: "Hěn gāoxìng rènshi nǐ yě hen! Nǐ cóng nǎr lái a?",
    chinese: "很高兴认识你！你从哪儿来？",
    english: "Nice to meet you too! Where are you from?",
  },
  {
    who: "B",
    pinyin: "Wǒ cóng Měiguó lái. Wǒ xianzai zài Tháilán liúxué.",
    chinese: "我从美国来。我现在在泰国留学。",
    english: "I'm from the United States. I'm currently studying in Thailand.",
  },
  {
    who: "A",
    pinyin: "Nǐ xìnghuān Zhōngguó ma?",
    chinese: "你喜欢中国吗？",
    english: "Do you like China?",
  },
  {
    who: "B",
    pinyin:
      "D当rán xǐhuan! Wǒ jīntiān lái dào zhè ge chéngshì cānjiā yī ge wénhuà jiāoliú huìyì. Zhōngguó de wénhuà hěn yǒumiào.",
    chinese:
      "当然喜欢！我今天来到这个城市参加一个文化交流会议。中国的文化很有意思。",
    english:
      "Absolutely! I came to this city today to participate in a cultural exchange conference. China has a fascinating culture.",
  },
  {
    who: "A",
    pinyin:
      "Xièxie nǐ de xǐhuan! Zhōngguó yǒu hěn dōu yóuqì de wénhuà yínSù. Nǐ yǒu wèntí yào wèn wǒ ma?",
    chinese: "谢谢你的喜欢！中国有很多有趣的文化因素。你有问题要问我吗？",
    english:
      "Thank you for liking it! China has many interesting cultural aspects. Do you have any questions for me?",
  },
  {
    who: "B",
    pinyin:
      "Duì, wǒ yǒu yī ge wèntí. Wǒ kěyǐ zhīdào jiemén hǎn guǒ shì zěnme zuò de ma?",
    chinese: "对，我有问题。我可以知道饺子馅儿是怎么做的吗？",
    english:
      "Yes, I have a question. Can you tell me how to make dumpling filling?",
  },
  {
    who: "A",
    pinyin:
      "Kěyǐ a! Wǒ kěyǐ jiǎo nǐ. Dumplings bù nánshuò zuò, wǒmen kěyǐ yīqǐ shìshì kànkan.",
    chinese: "可以啊！我可以教你。饺子不难做，我们可以一起试试看。",
    english:
      "Sure! I can teach you. Dumplings are not difficult to make, we can try it together and see.",
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
        <h1>Lesson 2 : Hello I come from Bangkok Thailand.</h1>
        <h2>Nǐ hǎo, wǒ cóng tàiguó màngǔ lái</h2>
        <h3>第二课:\你好, 我从泰国曼谷来</h3>
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
