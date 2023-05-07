import React, { useEffect, useState } from "react";
import axios from "axios";
import StageCard from "./StageCard";

export default function Stages() {
  // f9d46346-7e27-40de-a1a2-e9fdc60b653a

  const [stages, setStages] = useState<any>([]);

  const fetchStages = () => {
    axios({
      url: "http://localhost:8080/challenges/stages?challengeId=608927ea-3984-4c4c-bb10-9b551a74c915",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        setStages(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchStages();
  }, []);

  return (
    <div>
      {stages.map((stage: any) => (
        <StageCard title={stage.title} description={stage.description} />
      ))}
    </div>
  );
}
