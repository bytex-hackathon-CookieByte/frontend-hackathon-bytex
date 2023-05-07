import React, { useContext } from "react";
import { Row } from "antd";
import ItemCard, { ItemCardProps } from "../Shop/components/ItemCard";
import token1 from "../../images/Tokens/token1.png";
import token2 from "../../images/Tokens/token2.png";
import token3 from "../../images/Tokens/token3.png";
import token4 from "../../images/Tokens/token4.png";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";

function TokenShop() {
  const { username, setTokens } = useContext(UserContext);

  const getTokens = (prize: string) => {
    axios
      .post("http://localhost:8080/users/tokens/add", {
        username,
        tokens: prize,
      })
      .then((res) => {
        setTokens(res.data);
        toast.success(prize + " Tokens have been added to your profile!");
      })
      .catch((err) => toast.error(err.message));
  };

  const cards: ItemCardProps[] = [
    {
      title: "100 Tokens",
      type: "tokens",
      onBuy: () => getTokens("100"),
      price: 1,
      image: token1,
    },
    {
      title: "1000 Tokens",
      type: "tokens",
      onBuy: () => getTokens("1000"),
      price: 9,
      image: token2,
    },
    {
      title: "10000 Tokens",
      type: "tokens",
      onBuy: () => getTokens("10000"),
      price: 80,
      image: token3,
    },
    {
      title: "100000 Tokens",
      type: "tokens",
      onBuy: () => getTokens("100000"),
      price: 199,
      image: token4,
    },
  ];

  return (
    <div className={"w-100 pb-10"}>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify={"center"}
        className={"max-w-full"}
      >
        {cards.map((item, i) => (
          <ItemCard {...item} key={i} />
        ))}
      </Row>
    </div>
  );
}

export default TokenShop;
