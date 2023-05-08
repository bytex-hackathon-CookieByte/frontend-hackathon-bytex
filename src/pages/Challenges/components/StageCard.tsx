import React, { useEffect, useState } from "react";
import { Avatar, Button, Card } from "antd";
import { Col } from "antd";
import { Link } from "react-router-dom";
import QuestionsModal from "./QuestionsModal";
import Leaderboard from "./Leaderboard";

const { Meta } = Card;

export default function StageCard(props: {
  title: string;
  description: string;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <Col className="gutter-row mt-5">
      <Card
        className="m-4 mt-10"
        style={{ width: 400, height: 120 }}
        actions={[
          <>
            <QuestionsModal />
            <Leaderboard />
          </>,
        ]}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </Col>
  );
}
