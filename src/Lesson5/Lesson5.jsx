// Game.js
import React, { useState, useEffect } from "react";
import "./Lesson5.css";
import Navbar from "../Navbar";
import Men from ".././img/m.png";
import Women from ".././img/w.png";


const vocabulary = [
  {
    chinese: "几号",
    pinyin: "jǐ hào",
    english: "what date",
  },
  {
    chinese: "星期",
    pinyin: "xīngqí",
    english: "week",
  },
  {
    chinese: "回国",
    pinyin: "huíguó",
    english: "to return to one's home country",
  },
  {
    chinese: "看",
    pinyin: "kàn",
    english: "to visit, to see",
  },
  {
    chinese: "回来",
    pinyin: "huílái",
    english: "to come back",
  },
  {
    chinese: "明年",
    pinyin: "míngnián",
    english: "next year",
  },
  {
    chinese: "生日",
    pinyin: "shēngrì",
    english: "birthday",
  },
  {
    chinese: "星期日",
    pinyin: "xīngqírì",
    english: "Sunday",
  },
  {
    chinese: "巧",
    pinyin: "qiǎo",
    english: "coincidental",
  },
  {
    chinese: "不好意思",
    pinyin: "bù hǎoyìsi",
    english: "excuse me, I'm sorry",
  },
];

const conversation = [
  {
    who: "A",
    pinyin: "Jīntiān jǐ hào?",
    chinese: "今天几号?",
    english: "What date is today?",
  },
  {
    who: "B",
    pinyin: "Jīntiān shì 10 yuè 1 hào.",
    chinese: "今天是 10 月 1 号。",
    english: "Today is October 1st.",
  },
  {
    who: "A",
    pinyin: "Nǐ shénme shíhòu huílái?",
    chinese: "你什么时候回来?",
    english: "When will you come back?",
  },
  {
    who: "B",
    pinyin: "Wǒ míngnián 1 yuè 3 hào huílái.",
    chinese: "我明年 1 月 3 号回来。",
    english: "I will come back on January 3rd next year.",
  },
  {
    who: "A",
    pinyin: "Nǐ shēngrì jǐ hào?",
    chinese: "你生日几号?",
    english: "When is your birthday?",
  },
  {
    who: "B",
    pinyin: "Wǒ shēngrì shì 10 yuè 1 rì.",
    chinese: "我生日是 10 月 1 日。",
    english: "My birthday is on October 1st.",
  },
  {
    who: "A",
    pinyin: "Nǐ shénme shíhòu huílái?",
    chinese: "你什么时候回来?",
    english: "When will you come back?",
  },
  {
    who: "B",
    pinyin: "Wǒ míngnián 1 yuè 3 hào huílái.",
    chinese: "我明年 1 月 3 号回来。",
    english: "I will come back on January 3rd next year.",
  },
  {
    who: "A",
    pinyin: "Nǐ shēngrì jǐ hào?",
    chinese: "你生日几号?",
    english: "When is your birthday?",
  },
  {
    who: "B",
    pinyin: "Wǒ shēngrì shì 10 yuè 1 rì.",
    chinese: "我生日是 10 月 1 日.",
    english: "My birthday is on October 1st.",
  },
];

// To ask about the date, you can use the phrase "几号" (jǐ hào).
// To ask about the time, you can use the phrase "几点" (jǐ diǎn).
// To ask about the day of the week, you can use the phrase "星期几" (xīngqí jǐ).
// To ask about someone's birthday, you can use the phrase "你生日几号" (nǐ shēngrì jǐ hào).


function Game() {
  return (
    <div>
      <Navbar />
      <h1>Lesson 5 : </h1>
    </div>
  );
}
export default Game;
