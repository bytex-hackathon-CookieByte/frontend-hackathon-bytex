import React, { useContext, useEffect, useState } from "react";
import ItemCard, { ItemCardProps } from "./components/ItemCard";
import leprechaun from "../../images/Avatars/leprechaun.png";
import man from "../../images/Avatars/man.png";
import maya from "../../images/Avatars/maya.png";
import maya2 from "../../images/Avatars/maya-2.png";
import maya3 from "../../images/Avatars/maya-3.png";
import maya4 from "../../images/Avatars/maya-4.png";
import woman from "../../images/Avatars/woman.png";
import checkmark from "../../images/checkmark.png";
import courseImg from "../../images/course.png";
import { Row } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

function Shop() {
  const [courses, setCourses] = useState<ItemCardProps[]>([]);
  const { username, setTokens } = useContext(UserContext);

  const buyItem = (username: string, tokens: number) => {
    axios
      .post("http://localhost:8080/users/tokens/subtract", {
        username,
        tokens,
      })
      .then((res) => {
        setTokens(res.data);
      })
      .catch((err) => toast.error(err.message));
  };

  const review: ItemCardProps = {
    title: "Profile Review",
    type: "review",
    image: checkmark,
    price: 10000,
    onBuy: () => buyItem(username, 1000),
  };

  const avatars: ItemCardProps[] = [
    {
      title: "Leprechaun",
      type: "avatar",
      image: leprechaun,
      price: 100,
      onBuy: () => buyItem(username, 100),
    },
    {
      title: "Man",
      type: "avatar",
      image: man,
      price: 200,
      onBuy: () => buyItem(username, 200),
    },
    {
      title: "Maya",
      type: "avatar",
      image: maya,
      price: 500,
      onBuy: () => buyItem(username, 500),
    },
    {
      title: "Maya 2",
      type: "avatar",
      image: maya2,
      price: 1000,
      onBuy: () => buyItem(username, 1000),
    },
    {
      title: "Maya 3",
      type: "avatar",
      image: maya3,
      price: 2000,
      onBuy: () => buyItem(username, 2000),
    },
    {
      title: "Maya 4",
      type: "avatar",
      image: maya4,
      price: 5000,
      onBuy: () => buyItem(username, 5000),
    },
    {
      title: "Woman",
      type: "avatar",
      image: woman,
      price: 10000,
      onBuy: () => buyItem(username, 10000),
    },
  ];

  const getCourses = () => {
    axios({
      url: "http://localhost:8080/courses",
      method: "GET",
    })
      .then((res) => {
        setCourses(
          res.data.map((course: any) => {
            console.log(username);
            return {
              title: course.title,
              type: "course",
              image: courseImg,
              price: course.price,
              companyTitle: course?.company?.name,
              onBuy: () => buyItem(username, course.price),
            };
          })
        );
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className={"w-100 pb-10"}>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify={"center"}
        className={"max-w-full"}
      >
        {[review, ...avatars, ...courses].map((item, i) => (
          <ItemCard {...item} key={i} />
        ))}
      </Row>
    </div>
  );
}

export default Shop;
