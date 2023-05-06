import React, { useState } from "react";
import { Avatar, Button, Card } from "antd";
import { Col } from "antd";

const { Meta } = Card;

export default function ChallengeCard(props: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  //   const [challenge, setChallenge] = useState({
  //     title: "Challenge Title",
  //     description: "Challenge Description",
  //     points: 100,
  //   });

  return (
    <Col className="gutter-row mt-5">
      <Card
        style={{ width: 400, height: 400 }}
        cover={<img alt="example" src={props.imgSrc} />}
        actions={[
          <>
            <Button>Accept Challenge</Button>
          </>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title={props.title}
          description={props.description}
        />
      </Card>
    </Col>
  );
}
