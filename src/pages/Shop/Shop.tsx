import React from "react";
import ItemCard from "./components/ItemCard";
import leprechaun from "../../images/Avatars/leprechaun.png";
import man from "../../images/Avatars/man.png";
import maya from "../../images/Avatars/maya.png";
import maya2 from "../../images/Avatars/maya-2.png";
import maya3 from "../../images/Avatars/maya-3.png";
import maya4 from "../../images/Avatars/maya-4.png";
import woman from "../../images/Avatars/woman.png";
import checkmark from "../../images/checkmark.png";
import course from "../../images/course.png";
import { Row } from "antd";

function Shop() {
  return (
    <div className={"w-100"}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
        <ItemCard
          title={"Profile Review"}
          type={"review"}
          image={checkmark}
          price={500}
          onBuy={() => console.log("buy")}
        />
        <ItemCard
          title={"Leprechaun"}
          image={leprechaun}
          price={100}
          type={"avatar"}
          onBuy={() => console.log("buy")}
        />
        <ItemCard
          title={"Man"}
          image={man}
          price={200}
          type={"avatar"}
          onBuy={() => console.log("buy")}
        />
        <ItemCard
          title={"Leprechaun"}
          image={maya}
          price={100}
          type={"avatar"}
          onBuy={() => console.log("buy")}
        />
        <ItemCard
          title={"Leprechaun"}
          image={maya2}
          price={100}
          type={"avatar"}
          onBuy={() => console.log("buy")}
        />{" "}
        <ItemCard
          title={"Leprechaun"}
          image={maya3}
          price={100}
          type={"avatar"}
          onBuy={() => console.log("buy")}
        />{" "}
        <ItemCard
          title={"Leprechaun"}
          image={maya4}
          price={100}
          type={"avatar"}
          onBuy={() => console.log("buy")}
        />
        <ItemCard
          title={"Leprechaun"}
          image={woman}
          price={100}
          type={"avatar"}
          onBuy={() => console.log("buy")}
        />
        <ItemCard
          title={"Profile Review"}
          type={"review"}
          image={checkmark}
          price={200}
          onBuy={() => console.log("buy")}
        />
        <ItemCard
          title={"React Course"}
          type={"course"}
          image={course}
          price={500}
          onBuy={() => console.log("buy")}
        />
      </Row>
    </div>
  );
}

export default Shop;
