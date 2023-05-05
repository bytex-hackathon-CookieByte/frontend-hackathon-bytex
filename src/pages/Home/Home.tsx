import React from "react";
import { Button } from "antd";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className={"text-center"}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button onClick={() => toast.success("Hello")}>
        <FontAwesomeIcon icon={faHouse} className={"mr-1"} />
        Click me
      </Button>
    </div>
  );
}

export default Home;
