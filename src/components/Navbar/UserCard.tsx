import React, { useContext } from "react";
import { Avatar, Space } from "antd";
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { getAvatar } from "../../images/Avatars/avatars";

type UserCardProps = {
  className?: string;
  isCollapsed: boolean;
};

function UserCard({ isCollapsed, className }: UserCardProps) {
  const { username, getSelectedAvatar, tokens } = useContext(UserContext);
  return (
    <div className={`${className}`}>
      <div className={!isCollapsed ? "flex items-center align-top" : ""}>
        <Avatar
          src={getAvatar(getSelectedAvatar())}
          className={isCollapsed ? "mx-[-50%]" : ""}
        />
        {!isCollapsed && (
          <Space direction={"horizontal"}>
            <div className={"ml-1 max-w-[4rem] truncate"}>
              {username || "username"}
            </div>
            <div className={"ml-1"}>
              {tokens}
              <FontAwesomeIcon
                icon={faCoins}
                className={"ml-0.5 text-neutral-500"}
              />
            </div>
          </Space>
        )}
      </div>
    </div>
  );
}

export default UserCard;
