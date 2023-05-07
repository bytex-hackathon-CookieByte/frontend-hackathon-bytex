import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ChallengeCard from "../Challenges/components/ChallengeCard";
import bytex_cover from "../../images/bytex-cover.png";
import { Row } from "antd";
import { UserContext } from "../../context/UserContext";

function MyChallenges() {
  const [challenges, setChallenges] = useState<any>([]);
  const { id } = useContext(UserContext);
  const [myId, setMyId] = useState<string>(id);

  const fetchChallenges = () => {
    console.log("MY ID", id);
    axios({
      url: `http://localhost:8080/users/scores?userId=${myId}`,
      method: "GET",
    })
      .then((res) => {
        setChallenges(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  return (
    <div className="w-100">
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify={"center"}
        className="max-w-full"
      >
        {challenges.map((challenge: any) => (
          <ChallengeCard
            title={challenge.challenge.title}
            description={challenge.challenge.description}
            imgSrc={bytex_cover}
          />
        ))}
      </Row>
    </div>
  );
}

export default MyChallenges;
