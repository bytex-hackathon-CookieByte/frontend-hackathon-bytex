import React, { useContext, useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Divider, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
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
        collapsible={true}
        collapsed={isCollapsed}
        onCollapse={(val) => setIsCollapsed(val)}
        theme={"light"}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <Menu className={"h-full"}>
          <Link to={"/home"}>
            {isCollapsed ? (
              <img src={croppedLogo} className={"p-[1rem]"} />
            ) : (
              <img src={logo} className={"p-[2rem]"} />
            )}
          </Link>
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
          <Menu.Item icon={<FontAwesomeIcon icon={faGraduationCap} />}>
            <Link to={"/courses"}>Courses</Link>
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
