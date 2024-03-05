// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson7.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";



const vocabulary = [
  {
    chiness: "每天",
    pinyin: "měi tiān",
    english: "every day",
  },
  {
    chiness: "昨天",
    pinyin: "zuó tiān",
    english: "yesterday",
  },
  {
    chiness: "今天",
    pinyin: "jīn tiān",
    english: "today",
  },
  {
    chiness: "明天",
    pinyin: "míng tiān",
    english: "tomorrow",
  },
  {
    chiness: "早上",
    pinyin: "zǎo shàng",
    english: "morning",
  },
  {
    chiness: "中午",
    pinyin: "zhōng wǔ",
    english: "noon",
  },
  {
    chiness: "下午",
    pinyin: "xià wǔ",
    english: "afternoon",
  },
  {
    chiness: "晚上",
    pinyin: "wǎn shàng",
    english: "evening",
  },
  {
    chiness: "凌晨",
    pinyin: "líng chén",
    english: "early morning",
  },
  {
    chiness: "饭",
    pinyin: "fàn",
    english: "rice",
  },
  {
    chiness: "餐",
    pinyin: "cān",
    english: "meal",
  },
  {
    chiness: "时间",
    pinyin: "Time",
    english: "time",
  },
  {
    chiness: "早饭",
    pinyin: "zǎo fàn",
    english: "breakfast",
  },
  {
    chiness: "午饭",
    pinyin: "wǔ fàn",
    english: "lunch",
  },
  {
    chiness: "晚饭",
    pinyin: "wǎn fàn",
    english: "dinner",
  },
  {
    chiness: "起床",
    pinyin: "qǐ chuáng",
    english: "to get up",
  },
  {
    chiness: "洗澡",
    pinyin: "xǐ zǎo",
    english: "to take a shower",
  },
  {
    chiness: "上网",
    pinyin: "shàng wǎng",
    english: "to go online",
  },
  {
    chiness: "看电视",
    pinyin: "kàn diàn shì",
    english: "to watch TV",
  },
  {
    chiness: "见朋友",
    pinyin: "jiàn péng yǒu",
    english: "to meet friends",
  },
  {
    chiness: "洗脸",
    pinyin: "xǐ liǎn",
    english: "to wash your face",
  },
  {
    chiness: "涮牙",
    pinyin: "shuàn yá",
    english: "to brush your teeth",
  },
  {
    chiness: "睡觉",
    pinyin: "shuì jiào",
    english: "to go to sleep",
  },
  {
    chiness: "学校",
    pinyin: "xué xiào",
    english: "school",
  },
  {
    chiness: "图书馆",
    pinyin: "tú shū guǎn",
    english: "library",
  },
  {
    chiness: "上课",
    pinyin: "shàng kè",
    english: "to go to class",
  },
  {
    chiness: "学习",
    pinyin: "xué xí",
    english: "to study",
  },
  {
    chiness: "下课",
    pinyin: "xià kè",
    english: "to get out of class",
  },
  {
    chiness: "去",
    pinyin: "qù",
    english: "to go",
  },
  {
    chiness: "来",
    pinyin: "lái",
    english: "to come",
  },
  {
    chiness: "学校",
    pinyin: "xué xiào",
    english: "school",
  },
  {
    chiness: "图书馆",
    pinyin: "tú shū guǎn",
    english: "library",
  },
  {
    chiness: "上课",
    pinyin: "shàng kè",
    english: "to go to class",
  },
  {
    chiness: "学习",
    pinyin: "xué xí",
    english: "to study",
  },
  {
    chiness: "教室",
    pinyin: "jiàoshì",
    english: "classroom",
  },
  {
    chiness: "开",
    pinyin: "kāi",
    english: "to open",
  },
  {
    chiness: "关",
    pinyin: "guān",
    english: "to close",
  },
  {
    chiness: "门",
    pinyin: "mén",
    english: "door",
  },
  {
    chiness: "摄像头",
    pinyin: "shè xiàng tóu",
    english: "camera",
  },
  {
    chiness: "电视",
    pinyin: "diàn shì",
    english: "TV",
  },
  {
    chiness: "电脑",
    pinyin: "diàn nǎo",
    english: "computer",
  },
  {
    chiness: "小学生",
    pinyin: "xiǎo xué shēng",
    english: "elementary school student",
  },
  {
    chiness: "留学生",
    pinyin: "liú xué shēng",
    english: "international student",
  },
  {
    chiness: "大学生",
    pinyin: "dà xué shēng",
    english: "college student",
  },
  {
    chiness: "中学生",
    pinyin: "zhōng xué shēng",
    english: "middle school student",
  },
  {
    chiness: "点",
    pinyin: "diǎn",
    english: "o’clock",
  },
  {
    chiness: "分",
    pinyin: "fèn",
    english: "minute",
  },
  {
    chiness: "秒",
    pinyin: "miǎo",
    english: "second",
  },
  {
    chiness: "刻",
    pinyin: "kè",
    english: "quarter",
  },
  {
    chiness: "小时",
    pinyin: "xiǎo shí",
    english: "hour",
  },
  {
    chiness: "半",
    pinyin: "bàn",
    english: "half",
  },
  {
    chiness: "差",
    pinyin: "chà",
    english: "be less than",
  },
  {
    chiness: "安排",
    pinyin: "ān pái",
    english: "to plan",
  },
  {
    chiness: "开始",
    pinyin: "kāi shǐ",
    english: "to start",
  },
  {
    chiness: "常常",
    pinyin: "cháng cháng",
    english: "often, usually",
  },
  {
    chiness: "有时候",
    pinyin: "yǒu shí hòu",
    english: "sometimes",
  },
  {
    chiness: "先",
    pinyin: "xiān",
    english: "before",
  },
  {
    chiness: "然后",
    pinyin: "rán hòu",
    english: "and then, after that",
  },
];

const conversation = [
  {
    who: "马丁",
    chiness:
      "我是留学生。我每天六点半起床。起床以后先洗澡然后吃早餐。我差一刻八点去教室上课。我们每天八点上课，十一点半下课。下午我常常去图书馆看书。晚上我学习汉语有时候看电视、上网。请问，现在几点？",
    pinyin:
      "Wǒ shì liúxuéshēng. Wǒ měitiān liù diǎn bàn qǐchuáng. Qǐchuáng yǐhòu xiān xǐzǎo ránhòu chī zǎocān. Wǒ chà yīkè bā diǎn qù jiàoshì shàngkè. Wǒmen měitiān bā diǎn shàngkè, shíyī diǎn bàn xiàkè. Xiàwǔ wǒ chángcháng qù túshū guǎn kànshū. Wǎnshàng wǒ xuéxí hànyǔ",
    english:
      "I am an international student. I get up at six thirty every day. After getting up, I take a shower and then have breakfast. I go to the classroom at a quarter to eight. We have class at eight o'clock every day, and we finish class at eleven thirty. In the afternoon, I often go to the library to read. In the evening, I study Chinese, sometimes watch TV, and go online. May I ask, what time is it now?",
  },
  {
    who: "琳娜",
    chiness: "一点四十。你有什么事吗？",
    pinyin: "Yī diǎn sìshí. Nǐ yǒu shénme shì ma?",
    english: "One forty. Do you have anything?",
  },
  {
    who: "马丁",
    chiness: "我两点去图书馆看书。",
    pinyin: "Wǒ liǎng diǎn qù túshū guǎn kànshū.",
    english: "I will go to the library to read at two o'clock.",
  },
  {
    who: "琳娜",
    chiness: "你看什么书？",
    pinyin: "Nǐ kàn shénme shū?",
    english: "What book are you reading?",
  },
  {
    who: "马丁",
    chiness: "我看英文书。",
    pinyin: "Wǒ kàn yīngwén shū.",
    english: "I read English books.",
  },
  {
    who: "琳娜",
    chiness: "图书馆每天几点开门？",
    pinyin: "Túshū guǎn měitiān jǐ diǎn kāimén?",
    english: "What time does the library open every day?",
  },
  {
    who: "马丁",
    chiness: "早上八点开门。",
    pinyin: "Zǎoshang bā diǎn kāimén.",
    english: "The library opens at eight o'clock in the morning.",
  },
  {
    who: "琳娜",
    chiness: "几点关门？",
    pinyin: "Jǐ diǎn guānmén?",
    english: "What time does it close?",
  },
  {
    who: "马丁",
    chiness: "晚上八点关门。",
    pinyin: "Wǎnshàng bā diǎn guānmén.",
    english: "It closes at eight o'clock in the evening.",
  },
  {
    who: "琳娜",
    chiness: "太好了，明天我也去。",
    pinyin: "Tài hǎo le, míngtiān wǒ yě qù.",
    english: "Great, I will go tomorrow too.",
  },
];

// Tricks and tips in class

// To ask about the time, you can use the phrase "现在几点？" (xiànzài jǐ diǎn le?)
// To tell the time, you can use the following format:
// [Hour]点[Minute]分

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
      {/* Vocabulary */}
      <div className="Vocabulary">
        <h1>Vocabulary</h1>
        <ul>
          {vocabulary.map((item, index) => (
            <li
              key={index}
              className="boarder"
              onClick={() => handleReadText(item.chiness)}
              disabled={isAnyTextBeingRead}
            >
              <p>{item.pinyin}</p>
              <p>{item.chiness}</p>
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
              className={`Conversation${item.who === "琳娜" ? "women" : "men"}`}
            >
              <div>
                {item.who === "琳娜" ? (
                  <>
                    <img
                      src={item.who === "琳娜" ? Women : Men}
                      alt=""
                      onClick={() => handleReadText(item.chiness)}
                    />
                    <button
                      onClick={() => handleReadText(item.chiness)}
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
                      onClick={() => handleReadText(item.chiness)}
                      disabled={isSpeaking}
                      style={{ fontSize: "20px" }}
                      className="read"
                    >
                      🔊
                    </button>
                    <img
                      src={item.who === "琳娜" ? Women : Men}
                      alt=""
                      onClick={() => handleReadText(item.chiness)}
                    />
                  </>
                )}
              </div>
              {item.who === "琳娜" ? (
                <>
                  <p>
                    {item.who} : {item.pinyin}
                  </p>
                  <p>
                    {item.who} : {item.chiness}
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
                    {item.chiness} : {item.who}
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

