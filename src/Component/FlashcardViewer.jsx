import React, { useState, useEffect } from "react";
import "./custom.css";

const initialCards = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building UIs." },
  { id: 2, question: "What is Tailwind CSS?", answer: "A utility-first CSS framework." },
  { id: 3, question: "What is a component?", answer: "A reusable piece of UI in React." },
];

const FlashcardViewer = () => {
  const [cards] = useState(initialCards);
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  // Toggle dark/light mode
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="flashcard-container">
        <h1 className="flashcard-title">Flashcard Quiz</h1>

        <p className="flashcard-text">
          {showAnswer ? cards[current].answer : cards[current].question}
        </p>

        <button
          className="btn btn-primary"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        <div className="button-group">
          <button className="btn btn-nav" onClick={prevCard}>
            Back
          </button>
          <button className="btn btn-nav" onClick={nextCard}>
            Next 
          </button>
        </div>
      </div>
    </>
  );
};

export default FlashcardViewer;
