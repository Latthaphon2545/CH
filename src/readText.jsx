// readText.jsx
const ReadText = (translatedText) => async () =>{
  const targetLanguage = "zh";
  const speech = new SpeechSynthesisUtterance(translatedText);
  speech.lang = targetLanguage;
  window.speechSynthesis.speak(speech);
};




