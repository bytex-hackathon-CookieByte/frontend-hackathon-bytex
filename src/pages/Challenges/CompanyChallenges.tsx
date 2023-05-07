import React, { useEffect, useState } from "react";
import ChallengeCard from "./components/ChallengeCard";
import bytex_cover from "../../images/bytex-cover.png";
import { Row, Button } from "antd";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";

export default function CompanyChallenges() {
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
    <>
      <AddChallenge fetchChallenges={fetchChallenges} />
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
    </>
  );
}
