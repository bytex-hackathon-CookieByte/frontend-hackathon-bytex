import React from "react";
import { Button, Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

type ItemCardProps = {
  title: string;
  image: string;
  price: number;
  type: "avatar" | "review" | "course";
  onBuy: () => void;
};

function ItemCard({ title, image, price, type, onBuy }: ItemCardProps) {
  const getType = () => {
    if (type === "avatar") {
      return "User Avatar";
    } else if (type === "review") {
      return "Other users can review your profile";
    } else if (type === "course") {
      return "Course";
    }
    return "Item";
  };

  return (
    <Col className="gutter-row mt-5">
      <Card
        className={"shadow-xl"}
        cover={
          <div className={"px-10 py-5"}>
            <img src={image} className={"w-[12rem] h-[12rem]"} />
          </div>
        }
        actions={[
          <div>
            {price}
            <FontAwesomeIcon icon={faCoins} className={"ml-1"} />
          </div>,
          <Button onClick={onBuy}>Buy</Button>,
        ]}
      >
        <Meta title={title} description={getType()} />
      </Card>
    </Col>
  );
}

export default ItemCard;
