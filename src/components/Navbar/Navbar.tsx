import React, { useContext, useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Divider, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMedal,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import croppedLogo from "../../images/LogoCropped.png";
import UserCard from "./UserCard";
import { UserContext } from "../../context/UserContext";

function Navbar() {
  const { username } = useContext(UserContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={(val) => setIsCollapsed(val)}
        theme={"light"}
      >
        <Link to={"/"}>
          {isCollapsed ? (
            <img src={croppedLogo} className={"p-[1rem]"} />
          ) : (
            <img src={logo} className={"p-[2rem]"} />
          )}
        </Link>
        <Menu className={"h-full"}>
          <Divider />
          <Menu.Item icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <Link to={"/challenges"}>Challenges</Link>
          </Menu.Item>
          <Menu.Item icon={<FontAwesomeIcon icon={faMedal} />}>
            <Link to={"/my-challenges"}>My Challenges</Link>
          </Menu.Item>
          <Menu.Item icon={<FontAwesomeIcon icon={faSackDollar} />}>
            <Link to={"/shop"}>Shop</Link>
          </Menu.Item>
          <Divider />
          <Menu.Item>
            <Link to={`/profile/user/${username}`}>
              <UserCard isCollapsed={isCollapsed} />
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default Navbar;
