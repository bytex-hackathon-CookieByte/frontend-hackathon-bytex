import React, { useEffect, useState, useContext } from "react";
import { Button } from "antd";
import "./MemoryGame.css";
import SingleCard from "./subcomponents/SingleCard";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";

const cardImages = [
  { src: "/img/maya-2.png", matched: false },
  { src: "/img/leprechaun.png", matched: false },
  { src: "/img/leprechaun.png", matched: false },
  { src: "/img/maya-2.png", matched: false },
  { src: "/img/maya-3.png", matched: false },
  { src: "/img/maya-4.png", matched: false },
  { src: "/img/maya.png", matched: false },
  { src: "/img/maya.png", matched: false },
];

function MemoryGame() {
  const { username, setTokens, type } = useContext(UserContext);
  const [isFinished, setIsFinished] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const suffleCards = () => {
    const suffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(suffledCards);
    setTurns(0);
  };

  // console.log("KARDS", cards);

  const checkMatch = () => {
    cards.forEach((card) => {
      if (card.matched === false) {
        setIsFinished(false);
      }
    });
    setIsFinished(true);
  };

  useEffect(() => {
    checkMatch();
  }, [cards]);

  useEffect(() => {
    if (isFinished === true) {
      console.log("Game is finished");
      getPrize();
    }
  }, [isFinished]);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    suffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const getPrize = () => {
    const wonTokens = Math.ceil(0.5 * (100 - turns));
    axios
      .post(
        `http://localhost:8080/${
          type === "user" ? "users" : "companies"
        }/tokens/add`,
        {
          username,
          tokens: wonTokens,
        }
      )
      .then((res) => {
        setTokens(res.data);
        toast.success(wonTokens + " have been added to your profile!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center flex-col overflow-hidden">
      <h1>Memory game</h1>
      <Button onClick={suffleCards}>New Game</Button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default MemoryGame;
