import React, { useState, useEffect } from "react";
import buddy from "../../../images/Avatars/buddy.png";
import maya from "../../../images/Avatars/maya-4.png";
import { useNavigate } from "react-router-dom";

export default function Battle() {
  const navigate = useNavigate();

  const [counter, setCounter] = useState(10);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const startGame = (e: React.ChangeEvent<HTMLInputElement>) => {};

  if (counter === 0) {
    navigate("/challenges/asfasf/stages");
  }

  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-r from-cyan-300 to-blue-600 opacity-90 overflow-hidden">
      <div className="mb-12 flex justify-center items-center flex-col">
        <h1 className="text-6xl italic">Challenge time!</h1>
        <div>
          <div onChange={startGame} className="text-4xl mt-4 opacity-70">
            {counter}{" "}
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <img className="w-72" src={buddy} alt="buddy" />
          <h1 className="text-3xl bold italic mt-6"> Mirel</h1>
        </div>
        <h1 className="text-3xl bold italic"> VS </h1>
        <div className="flex flex-col justify-center items-center">
          <img className="w-72" src={maya} alt="maya" />
          <h1 className="text-3xl bold italic mt-6">Mirela</h1>
        </div>
      </div>
    </div>
  );
}
