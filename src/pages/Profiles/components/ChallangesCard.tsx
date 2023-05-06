import React, { useState } from "react";
import trophy from "../../../images/trophy.png";

export default function ChallangesCard() {
  return (
    <div className="flex jusitfy-center items-center flex-row p-10 bg-gray-50 rounded shadow-xl m-4 w-[40rem]">
      <div className="flex jusitfy-center items-center flex-col w-[15rem]">
        <img src={trophy} alt="trophy" className="" />
      </div>
      <div className="flex flex-col justify-center px-4 py-6">
        {/* <h1 className="text-3xl font-bold opacity-90 mb-2">{props.userId}</h1> */}
        <h1 className="text-3xl font-bold opacity-90 mb-4">Challanges</h1>
        <div className="mb-2">
          <h1 className="text-md font-bold opacity-70">
            Bytex Frontend Challange
          </h1>
          <p className="">description 1</p>
        </div>
        <div className="mb-2">
          <h1 className="text-md font-bold opacity-70">
            Bytex Backend Challange
          </h1>
          <p className="">description 2</p>
        </div>
        <div className="mb-2">
          <h1 className="text-md font-bold opacity-70">
            Bytex Testing Challange
          </h1>
          <p className="">description 3</p>
        </div>
      </div>
    </div>
  );
}
