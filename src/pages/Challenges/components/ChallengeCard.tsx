import React, { useState, useContext } from "react";
import { Avatar, Button, Card } from "antd";
import { Col } from "antd";
import DeleteChallenge from "./DeleteChallenge";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";

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

  const { type, username, id } = useContext(UserContext);
  const [myUsername, setMyUsername] = useState<string>(username);
  const [myId, setMyId] = useState<string>(id);

  const handleAddChallenge = () => {
    setMyUsername(username);
    setMyId(id);
    console.log("id", myId, "username:", myUsername);
    const challengeData = {
      username: "tudstk",
      challengeId: "2d862a23-3fde-483e-8dc5-7658ad25fef6",
      scoreValue: 10,
    };
    console.log(challengeData);
    axios
      .post("http://localhost:8080/users/scores", challengeData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Col className="gutter-row mt-5">
      <Card
        style={{ width: 400, height: 400 }}
        cover={<img alt="example" src={props.imgSrc} />}
        actions={[
          <>
            <Button onClick={handleAddChallenge}>
              {type === "company" ? (
                <Link to="/battle">View Challenge</Link>
              ) : (
                <Link to="/battle">Accept Challenge</Link>
              )}
            </Button>
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
