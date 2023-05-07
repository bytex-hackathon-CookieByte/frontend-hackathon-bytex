import React, { useContext, useState } from "react";
import { Avatar, Modal } from "antd";
import buddy from "../../../images/Avatars/buddy.png";
import { UserContext } from "../../../context/UserContext";
import { getAvatar } from "../../../images/Avatars/avatars";
import axios from "axios";
import { toast } from "react-toastify";

export default function UserInfo(props: { userId: string | undefined }) {
  const { getSelectedAvatar, getOwnedAvatars, setAvatar, id } =
    useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex jusitfy-center items-center flex-row p-10 bg-gray-50 rounded shadow-xl m-4 w-[40rem]">
        <div className="flex jusitfy-center items-center flex-col">
          <Avatar
            src={getAvatar(getSelectedAvatar())}
            className="w-48 h-48 cursor-pointer hover:scale-105"
            onClick={() => setIsOpen(true)}
          />
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
      <Modal open={isOpen} onCancel={() => setIsOpen(false)}>
        {getOwnedAvatars().map((avatarData, i) => (
          <div
            key={i}
            onClick={() => {
              let newAvatar = "";
              getOwnedAvatars().forEach((avatar) => {
                console.log(avatar);
                if (avatar !== avatarData) {
                  newAvatar = newAvatar.concat("/").concat(avatar);
                } else {
                  newAvatar = newAvatar.concat(
                    "/[" + avatarData.replaceAll("[", "").replace("]", "") + "]"
                  );
                }
              });
              newAvatar = newAvatar.slice(1);
              axios
                .put(
                  `http://localhost:8080/users/avatars?userId=${id}&avatar=${newAvatar
                    .replaceAll("/", "%2F")
                    .replaceAll("[", "%5B")
                    .replaceAll("]", "%5D")}`
                )
                .then((res) => console.log(res.data))
                .catch((err) => toast.error(err.message));
              setAvatar(newAvatar);
              setIsOpen(false);
            }}
          >
            <img
              src={getAvatar(avatarData)}
              className={"w-[10rem] m-3 cursor-pointer hover:scale-105"}
            />
          </div>
        ))}
      </Modal>
    </>
  );
}
