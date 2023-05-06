import React from "react";
import { Avatar, Divider, Space } from "antd";
import buddy from "../../images/Avatars/buddy.png";

type UserCardProps = {
  className?: string;
  isCollapsed: boolean;
};

function UserCard({ isCollapsed, className }: UserCardProps) {
  const username = "printesik123",
    avatar = buddy;
  return (
    <div className={`${className}`}>
      <div className={!isCollapsed ? "flex items-center align-top" : ""}>
        <Avatar src={avatar} className={isCollapsed ? "mx-[-50%]" : ""} />
        {!isCollapsed && <div className={"ml-2"}>{username}</div>}
      </div>
    </div>
  );
}

export default UserCard;
