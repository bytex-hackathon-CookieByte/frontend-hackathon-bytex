import React from "react";
import ItemCard, { ItemCardProps } from "./components/ItemCard";
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

const review: ItemCardProps = {
  title: "Profile Review",
  type: "review",
  image: checkmark,
  price: 10000,
  onBuy: () => {},
};

const avatars: ItemCardProps[] = [
  {
    title: "Leprechaun",
    type: "avatar",
    image: leprechaun,
    price: 100,
    onBuy: () => {},
  },
  {
    title: "Man",
    type: "avatar",
    image: man,
    price: 200,
    onBuy: () => {},
  },
  {
    title: "Maya",
    type: "avatar",
    image: maya,
    price: 500,
    onBuy: () => {},
  },
  {
    title: "Maya 2",
    type: "avatar",
    image: maya2,
    price: 1000,
    onBuy: () => {},
  },
  {
    title: "Maya 3",
    type: "avatar",
    image: maya3,
    price: 2000,
    onBuy: () => {},
  },
  {
    title: "Maya4",
    type: "avatar",
    image: maya4,
    price: 5000,
    onBuy: () => {},
  },
  {
    title: "Woman",
    type: "avatar",
    image: woman,
    price: 10000,
    onBuy: () => {},
  },
];

const courses: ItemCardProps[] = [
  {
    title: "React for begginers",
    type: "course",
    image: course,
    price: 5000,
    onBuy: () => {},
  },
  {
    title: "Springboot introduction",
    type: "course",
    image: course,
    price: 5000,
    onBuy: () => {},
  },
];

function Shop() {
  return (
    <div className={"w-100 pb-10"}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
        {[review, ...avatars, ...courses].map((item) => (
          <ItemCard
            title={item.title}
            image={item.image}
            price={item.price}
            type={item.type}
            onBuy={item.onBuy}
          />
        ))}
      </Row>
    </div>
  );
}

export default Shop;
