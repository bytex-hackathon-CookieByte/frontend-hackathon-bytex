import React, { useState } from "react";
import { Button, Card, Col, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Meta from "antd/es/card/Meta";
import course from "../../../images/course.png";

export type CourseType = {
  title: string;
  content: string;
  price: number;
  prize?: number;
};

function Course({ title, content, prize }: CourseType) {
  const [isOpen, setIsOpen] = useState(false);

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
              Prize: {prize}
              <FontAwesomeIcon icon={faCoins} className={"ml-1"} />
            </div>,
            <Button onClick={() => setIsOpen(true)}>Open</Button>,
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
        open={isOpen}
        closable={false}
        footer={
          <Button danger onClick={() => setIsOpen(false)}>
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
