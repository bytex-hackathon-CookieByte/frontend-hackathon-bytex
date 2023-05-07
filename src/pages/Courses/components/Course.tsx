import React, { useContext, useState } from "react";
import { Button, Card, Col, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Meta from "antd/es/card/Meta";
import course from "../../../images/course.png";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

export type CourseType = {
  title: string;
  content: string;
  price: number;
  prize?: number;
};

function Course({ title, content, prize }: CourseType) {
  const { username, setTokens, type } = useContext(UserContext);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const getPrize = () => {
    axios
      .post(
        `http://localhost:8080/${
          type === "user" ? "users" : "companies"
        }/tokens/add`,
        {
          username,
          tokens: prize,
        }
      )
      .then((res) => {
        setTokens(res.data);
        toast.success(prize + " Tokens have been added to your profile!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <Col className="gutter-row mt-5">
        <Card
          className={"shadow-xl"}
          cover={
            <div className={"px-10 py-5"}>
              <img src={course} className={"w-[12rem] h-[12rem]"} />
            </div>
          }
          actions={[
            <div>
              Prize: {prize || 0}
              <FontAwesomeIcon icon={faCoins} className={"ml-1"} />
            </div>,
            <Button onClick={() => setIsViewOpen(true)}>Open</Button>,
          ]}
        >
          <Meta
            title={title}
            description={
              <div className={"max-w-[8rem] truncate"}>{content}</div>
            }
          />
        </Card>
      </Col>
      <Modal
        title={title}
        open={isViewOpen}
        closable={false}
        footer={
          <Button
            danger
            onClick={() => {
              {
                type === "user" && getPrize();
              }
              setIsViewOpen(false);
            }}
          >
            Finish
          </Button>
        }
      >
        {content}
      </Modal>
    </>
  );
}

export default Course;
