import React, { useState } from "react";
import spring from "../../../images/spring.png";
import react_png from "../../../images/react-png.png";
import dotnet_png from "../../../images/dotnet-png.png";

export default function SkillsCard() {
  return (
    <div className="flex flex-col justify-center p-10 bg-gray-50 rounded shadow-xl m-4 w-[40rem]">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold opacity-90 mb-6">Skills</h1>
      </div>
      <div className="flex justify-around flex-row">
        <div className="flex flex-col justify-center items-center">
          <div className="w-24">
            <img src={react_png} alt="badge-1" />
          </div>
          <h1 className="text-lg font-bold opacity-70 mt-2">React</h1>
          <h1>Level 3</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-24">
            <img src={spring} alt="badge-1" />
          </div>
          <h1 className="text-lg font-bold opacity-70 mt-2">Spring</h1>
          <h1>Level 6</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-24">
            <img src={dotnet_png} alt="badge-1" />
          </div>
          <h1 className="text-lg font-bold opacity-70 mt-2">.NET</h1>
          <h1>Level 4</h1>
        </div>
      </div>
    </div>
  );
}
