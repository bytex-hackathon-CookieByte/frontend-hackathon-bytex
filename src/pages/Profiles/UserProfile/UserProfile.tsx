import React from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../components/UserInfoCard";
import Badges from "../components/BadgesCard";
import SkillsCard from "../components/SkillsCard";
import ChallengesCard from "../components/ChallengesCard";
import { Row } from "antd";

function UserProfile() {
  const { userId } = useParams();

  return (
    <div >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
        <UserInfo userId={userId} />
        <Badges />
        <ChallengesCard />
        <SkillsCard />
      </Row>
    </div>
  );
}

export default UserProfile;
