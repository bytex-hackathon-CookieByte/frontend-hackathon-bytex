import React, { useState } from "react";
import badge1 from "../../../images/badges/badge-1.png";

export default function Badges() {
  return (
    <div className="flex flex-col justify-center p-10 bg-gray-50 rounded shadow-xl m-4 w-[40rem]">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold opacity-90 mb-2">Badges</h1>
      </div>
      <div className="flex justify-around flex-row">
        <div className="flex flex-col justify-center items-center">
          <img className="w-32" src={badge1} alt="badge-1" />
          <h1 className="text-lg font-bold opacity-70 mt-2">Tenacity</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-32" src={badge1} alt="badge-1" />
          <h1 className="text-lg font-bold opacity-70 mt-2">Ambition</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-32" src={badge1} alt="badge-1" />
          <h1 className="text-lg font-bold opacity-70 mt-2">Best Mirel</h1>
        </div>
      </div>
    </div>
  );
}
