import React, { useEffect, useState, useContext } from "react";
import ChallengeCard from "./components/ChallengeCard";
import bytex_cover from "../../images/bytex-cover.png";
import { Row } from "antd";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

function Challenges(props: { buttonText: string }) {
  const [challenges, setChallenges] = useState<any>([]);

  const fetchChallenges = () => {
    axios({
      url: "http://localhost:8080/challenges",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        setChallenges(res.data);
      })
      .catch((err) => {});
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
            title={challenge.title}
            description={challenge.description}
            imgSrc={bytex_cover}
          />
        ))}
      </Row>
    </div>
  );
}

export default Challenges;
