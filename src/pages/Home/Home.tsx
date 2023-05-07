import React, { useContext } from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

function Home() {
  const { logout, username } = useContext(UserContext);
  return (
    // <div className="text-center">
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    //   <Button onClick={() => logout()}>
    //     <FontAwesomeIcon icon={faHouse} className={"mr-1"} />
    //     Logout
    //   </Button>
    // </div>
    <Navigate to={`/profile/user/${username}`} />
  );
}

export default Home;
