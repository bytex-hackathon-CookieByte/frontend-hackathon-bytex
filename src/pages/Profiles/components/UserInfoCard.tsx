import React, { useState } from "react";
import { Avatar } from "antd";
import buddy from "../../../images/Avatars/buddy.png";

export default function UserInfo(props: { userId: string | undefined }) {
  const avatar = buddy;
  return (
    <div className="flex jusitfy-center items-center flex-row p-10 bg-gray-50 rounded shadow-xl m-4 w-[40rem]">
      <div className="flex jusitfy-center items-center flex-col">
        <Avatar src={avatar} className="w-48 h-48" />
      </div>
      <div className="flex flex-col justify-center px-4 py-6">
        {/* <h1 className="text-3xl font-bold opacity-90 mb-2">{props.userId}</h1> */}
        <h1 className="text-3xl font-bold opacity-90 mb-2">Mirel Bodeanu</h1>
        <h5 className="text-lg font-bold opacity-70 mb-1">
          Student la Facultatea de Informatica
        </h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ipsa
          iusto quisquam perferendis ab a quae possimus! Sunt numquam, in
          sapiente necessitatibus adipisci, perferendis possimus quo commodi
          quas exercitationem cum.
        </p>
      </div>
    </div>
  );
}
