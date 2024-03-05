// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson3.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";

const conversation1 = [
  {
    who: "Mǎ Lì",
    pinyin: "Nǐ hǎo! Xiǎo péng you! Nǐ jiào shén me míng zi?",
    chinese: "你好！小朋友！你叫什么名字？",
    english: "Hello! Little friend! What is your name?",
  },
  {
    who: "Xiǎo nán hái",
    pinyin: "Wǒ jiào Zhào Hàn.",
    chinese: "我叫赵汉。",
    english: "My name is Zhao Han.",
  },
  {
    who: "Mǎ Lì",
    pinyin: "Nǐ jīn nián jǐ suì?",
    chinese: "你今年几岁？",
    english: "How old are you this year?",
  },
  {
    who: "Xiǎo nán hái",
    pinyin: "Nǐ cāi wǒ jǐ suì?",
    chinese: "你猜我几岁？",
    english: "Guess how old I am?",
  },
  {
    who: "Mǎ Lì",
    pinyin: "5 suì?",
    chinese: "5岁？",
    english: "5 years old?",
  },
  {
    who: "Xiǎo nán hái",
    pinyin: "Bú duì.",
    chinese: "不对。",
    english: "No.",
  },
  {
    who: "Mǎ Lì",
    pinyin: "7 suì?",
    chinese: "7岁？",
    english: "7 years old?",
  },
  {
    who: "Xiǎo nán hái",
    pinyin: "Bú duì, wǒ jīn nián liù suì.",
    chinese: "不对，我今年六岁。",
    english: "No, I'm 6 years old this year.",
  },
  {
    who: "Mǎ Lì",
    pinyin: "6 suì. Qǐng wèn nǐ rèn shi zhè gè ā yí ma?",
    chinese: "6岁。请问你认识这个阿姨吗？",
    english: "6 years old. Do you know this aunt?",
  },
  {
    who: "Xiǎo nán hái",
    pinyin: "Bú rèn shi.",
    chinese: "不认识。",
    english: "No.",
  },
];

const conversation2 = [
  {
    who: "Màikè",
    pinyin: "1 2 3 4 5 6 7 8；2 2 3 4......",
    chinese: "1 2 3 4 5 6 7 8；2 2 3 4......",
    english: "1 2 3 4 5 6 7 8; 2 2 3 4......",
  },
  {
    who: "Zhāng Yuán Yuán",
    pinyin: "Jiào liàn, nǐ hǎo!",
    chinese: "教练，你好！",
    english: "Coach, hello!",
  },
  {
    who: "Màikè",
    pinyin: "Nǐ hǎo! Yǒu shén me shì ér ma?",
    chinese: "你好！有什么事儿吗？",
    english: "Hello! What's up?",
  },
  {
    who: "Zhāng Yuán Yuán",
    pinyin: "Wǒ xiǎng jiàn shēn.",
    chinese: "我想健身。",
    english: "I want to work out.",
  },
  {
    who: "Màikè",
    pinyin: "Nǐ jiào shén me míng zi? Jīn nián duō dà?",
    chinese: "你叫什么名字？今年多大？",
    english: "What's your name? How old are you?",
  },
  {
    who: "Zhāng Yuán Yuán",
    pinyin: "Wǒ jiào Zhāng Yuán Yuán, 21 suì.",
    chinese: "我叫张媛媛，21岁。",
    english: "My name is Zhang Yuanyuan, 21 years old.",
  },
  {
    who: "Màikè",
    pinyin: "Zhāng Yuán Yuán, nǚ, 21 suì.",
    chinese: "张媛媛，女，21岁。",
    english: "Zhang Yuanyuan, female, 21 years old.",
  },
  {
    who: "Zhāng Yuán Yuán",
    pinyin: "Hǎo, nǐ xīng qī liù xià wǔ lái, kě yǐ ma?.",
    chinese: "好，你星期六下午来，可以吗？",
    english: "Okay, can you come on Saturday afternoon?",
  },
  {
    who: "Màikè",
    pinyin: "Kě yǐ.",
    chinese: "可以。",
    english: "Can.",
  },
  {
    who: "Zhāng Yuán Yuán",
    pinyin: "Xiè xiè, jiàn.",
    chinese: "谢谢，见。",
    english: "Thank you, see you.",
  },
  {
    who: "Màikè",
    pinyin: "Zàijiàn.",
    chinese: "再见。",
    english: "Goodbye.",
  },
];

const vocabulary = [
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

function Game() {
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

    speechPromise.then(() => {
      setIsAnyTextBeingRead(false);
    });
  };

  return (
    <div className="Lesson3">
      <Navbar />
      {/* Number */}
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
          {conversation1.map((item, index) => (
            <li
              key={index}
              className={`Conversation${
                item.who === "Mǎ Lì" ? "women" : "men"
              }`}
            >
              <div>
                {item.who === "Mǎ Lì" ? (
                  <>
                    <img
                      src={item.who === "Mǎ Lì" ? Women : Men}
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
                      src={item.who === "Mǎ Lì" ? Women : Men}
                      alt=""
                      onClick={() => handleReadText(item.chinese)}
                    />
                  </>
                )}
              </div>
              {item.who === "Mǎ Lì" ? (
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

export default Game;
