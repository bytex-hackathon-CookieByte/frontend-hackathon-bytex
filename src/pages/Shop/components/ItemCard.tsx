import React from "react";
import { Button, Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faEuroSign } from "@fortawesome/free-solid-svg-icons";

export type ItemCardProps = {
  title: string;
  image: string;
  price: number;
  type: "avatar" | "review" | "course" | "tokens";
  onBuy: () => void;
  companyTitle?: string;
};

function ItemCard({
  title,
  image,
  price,
  type,
  onBuy,
  companyTitle,
}: ItemCardProps) {
  const getType = () => {
    if (type === "avatar") {
      return "User Avatar";
    } else if (type === "review") {
      return "Users can review your profile";
    } else if (type === "course") {
      return `Course by ${companyTitle}`;
    } else if (type === "tokens") {
      return "Usefull for buying perks";
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
            <FontAwesomeIcon
              icon={type === "tokens" ? faEuroSign : faCoins}
              className={"ml-1"}
            />
          </div>,
          <Button onClick={onBuy}>Buy</Button>,
        ]}
      >
        <Meta
          title={title}
          description={
            <div className={"max-w-[13rem] truncate"}>{getType()}</div>
          }
        />
      </Card>
    </Col>
  );
}

export default ItemCard;
