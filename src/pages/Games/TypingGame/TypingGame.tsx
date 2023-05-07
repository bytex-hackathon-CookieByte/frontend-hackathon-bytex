import React, { useState, useEffect, useCallback } from "react";

const texts = [
  "Type this text as fast as you can!",
  "This is the second text to type.",
  "Here comes another text to practice your typing speed.",
  "Yet another text to improve your typing skills.",
];

function TypingGame() {
  const [gameState, setGameState] = useState("waiting");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [givenText, setGivenText] = useState(texts[currentTextIndex]);
  const [userText, setUserText] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [roundScores, setRoundScores] = useState([0]);

  const checkFinished = useCallback(() => {
    const userWords = userText.split(" ");
    const givenWords = givenText.split(" ");
    if (userWords.length === givenWords.length) {
      for (let i = 0; i < userWords.length; i++) {
        if (userWords[i] !== givenWords[i]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }, [userText, givenText]);

  const calculateScore = useCallback(() => {
    const wordsTyped = userText.split(" ");
    const correctWords = wordsTyped.filter((word, index) => {
      const givenWords = givenText.split(" ");
      return word === givenWords[index];
    });
    const wpm = (
      correctWords.length /
      ((Date.now() - startTime) / 60000)
    ).toFixed(2);

    setRoundScores((prevScores) => {
      const updatedScores = [...prevScores];
      if (currentTextIndex === 0) {
        updatedScores[0] = parseFloat(wpm);
      } else {
        updatedScores[currentTextIndex] = parseFloat(wpm);
      }
      return updatedScores;
    });
  }, [userText, givenText, startTime, currentTextIndex]);

  useEffect(() => {
    if (gameState === "started" && checkFinished()) {
      setGameState("finished");
      calculateScore();
    }
  }, [gameState, checkFinished, calculateScore]);

  useEffect(() => {
    setGivenText(texts[currentTextIndex]);
  }, [currentTextIndex]);

  const startGame = () => {
    setGameState("started");
    setStartTime(Date.now());
    setUserText("");
  };

  const nextRound = () => {
    const newIndex = currentTextIndex + 1;
    if (newIndex === texts.length) {
      setGameState("gameOver");
    } else {
      setCurrentTextIndex(newIndex);
      startGame();
    }
  };

  const calculateAverageScore = () => {
    const sum = roundScores.reduce((acc, score) => acc + score, 0);
    return sum / roundScores.length;
  };

  const renderValidationText = () => {
    const userWords = userText.split(" ");
    const givenWords = givenText.split(" ");
    return givenWords.map((word, index) => {
      let className = "";
      if (userWords[index] === word) {
        className = "correct";
      } else if (userWords[index] && userWords[index] !== word) {
        className = "incorrect";
      }
      return (
        <span key={index} className={className}>
          {word + " "}
        </span>
      );
    });
  };

  return (
    <div className="App">
      <h1>Typing Speed Test</h1>
      <div className="text-container">{renderValidationText()}</div>
      <textarea
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        disabled={gameState !== "started"}
      />
      {gameState === "waiting" && (
        <button onClick={startGame}>Start Game</button>
      )}
      {gameState === "finished" && (
        <button onClick={nextRound}>Next Round</button>
      )}
      {gameState === "finished" && (
        <div>
          Current Score: {roundScores[currentTextIndex - 1] || 89.2} WPM
        </div>
      )}
      {gameState === "gameOver" && (
        <div>Total Average Score: {calculateAverageScore().toFixed(2)} WPM</div>
      )}
    </div>
  );
}

export default TypingGame;
