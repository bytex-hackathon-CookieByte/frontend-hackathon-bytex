import React from "react";
import ChallengeCard from "./components/ChallengeCard";
import bytex_cover from "../../images/bytex-cover.png";
import { Row } from "antd";

function Challenges() {
  return (
    <div className="w-100">
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify={"center"}
        className=""
      >
        <ChallengeCard
          title="Bytex Frontend Challenge"
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          imgSrc={bytex_cover}
        />
        <ChallengeCard
          title="Bytex Backend Challenge"
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          imgSrc={bytex_cover}
        />
        <ChallengeCard
          title="Bytex Testing Challenge"
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          imgSrc={bytex_cover}
        />
        <ChallengeCard
          title="Bytex UI/UX Challenge"
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          imgSrc={bytex_cover}
        />
        <ChallengeCard
          title="Bytex QA Challenge"
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          imgSrc={bytex_cover}
        />
        <ChallengeCard
          title="Bytex DevOps Challenge"
          description="lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
          imgSrc={bytex_cover}
        />
      </Row>
    </div>
  );
}

export default Challenges;
