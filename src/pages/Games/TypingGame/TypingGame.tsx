import React, { useState, useEffect, useCallback, useContext } from "react";
import { Button, Input, Space } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/UserContext";

const texts = [
  "Type this text as fast as you can!",
  "This is the second text to type.",
  "Here comes another text to practice your typing speed.",
  "Yet another text to improve your typing skills.",
];

function TypingGame() {
  const { username, setTokens } = useContext(UserContext);

  const [gameState, setGameState] = useState<
    "waiting" | "started" | "finished" | "gameOver"
  >("waiting");
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
        className = "text-green-500";
      } else if (userWords[index] && userWords[index] !== word) {
        className = "text-red-500";
      }
      return (
        <span key={index} className={className}>
          {word + " "}
        </span>
      );
    });
  };

  useEffect(() => {
    if (gameState === "gameOver") {
      const getPrize = () => {
        const wonTokens = Math.ceil(0.25 * Math.ceil(calculateAverageScore()));
        axios
          .post("http://localhost:8080/users/tokens/add", {
            username,
            tokens: wonTokens,
          })
          .then((res) => {
            setTokens(res.data);
            toast.success(wonTokens + " have been added to your profile!");
          })
          .catch((err) => toast.error(err.message));
      };
      getPrize();
    }
  }, [gameState]);

  return (
    <div
      className={
        "text-center h-screen w-100 flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500"
      }
    >
      <Space className={"p-[5rem] flex flex-col bg-white rounded-2xl"}>
        <div className={"font-bold"}>Typing Speed Test</div>
        <div className={""}>{renderValidationText()}</div>
        <Input
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          className={"w-[25rem]"}
          disabled={gameState !== "started"}
        />
        {gameState === "waiting" && (
          <Button onClick={startGame}>Start Game</Button>
        )}
        {gameState === "finished" && (
          <Button onClick={nextRound}>Next Round</Button>
        )}
        {gameState === "finished" && (
          <div>
            Current Score: {roundScores[currentTextIndex - 1] || 89.2} WPM
          </div>
        )}
        {gameState === "gameOver" && (
          <div>
            Total Average Score: {calculateAverageScore().toFixed(2)} WPM
            <Button
              className={"mt-3"}
              onClick={() => {
                setGameState("waiting");
              }}
            >
              Play again!
            </Button>
          </div>
        )}
      </Space>
    </div>
  );
}

export default TypingGame;
