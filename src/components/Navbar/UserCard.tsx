import React, { useContext } from "react";
import { Avatar } from "antd";
import buddy from "../../images/Avatars/buddy.png";
import { UserContext } from "../../context/UserContext";

type UserCardProps = {
  className?: string;
  isCollapsed: boolean;
};

function UserCard({ isCollapsed, className }: UserCardProps) {
  const { username, avatar } = useContext(UserContext);

  return (
    <div className={`${className}`}>
      <div className={!isCollapsed ? "flex items-center align-top" : ""}>
        <Avatar
          src={avatar || buddy}
          className={isCollapsed ? "mx-[-50%]" : ""}
        />
        {!isCollapsed && <div className={"ml-2"}>{username || "-"}</div>}
      </div>
    </div>
  );
}

export default UserCard;
