import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/UserContext";
import { Input } from "antd";

const GuessNumber: React.FC = () => {
  const { username, setTokens, type } = useContext(UserContext);

  const [numberToGuess] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [guesses, setGuesses] = useState<number[]>([]);

  const handleSubmit = () => {
    setGuesses((prevGuesses) => [...prevGuesses, userGuess]);
    if (userGuess === numberToGuess) {
      setMessage(`You guessed the number in ${guesses.length + 1} tries!`);
      const getPrize = () => {
        const wonTokens = Math.ceil(0.5 * (100 - numberToGuess));
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
            toast.success(
              wonTokens + " Tokens have been added to your profile!"
            );
          })
          .catch((err) => toast.error(err.message));
      };
      getPrize();
    } else if (userGuess < numberToGuess) {
      setMessage("Higher!");
    } else {
      setMessage("Lower!");
    }
  };

  return (
    <div
      className={
        "text-center h-screen w-100 flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500"
      }
    >
      <div className="flex flex-col items-center min-w-[30rem] p-8 font-sans bg-gray-100 rounded-2xl shadow-md w-96 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Guess the Number
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Enter a number between 1 and 100:
        </p>
        <Input
          type="number"
          min="1"
          max="100"
          value={userGuess}
          onChange={(e) => setUserGuess(parseInt(e.target.value))}
          className="w-full py-2 px-4 text-base text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 mt-4 rounded transition duration-200"
        >
          Submit
        </button>
        <p className="text-xl font-medium text-gray-800 mt-4">{message}</p>
      </div>
    </div>
  );
};

export default GuessNumber;
