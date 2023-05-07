import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../components/UserInfoCard";
import Badges from "../components/BadgesCard";
import SkillsCard from "../components/SkillsCard";
import ChallengesCard from "../components/ChallengesCard";
import { Button, Row } from "antd";
import { UserContext } from "../../../context/UserContext";

function UserProfile() {
  const { userId } = useParams();
  const { logout } = useContext(UserContext);

  return (
    <div className="max-w-100">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
        <UserInfo userId={userId} />
        <Badges />
        <ChallengesCard />
        <SkillsCard />
        <div className={"w-[40rem] flex justify-center my-4"}>
          <Button danger onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </Row>
    </div>
  );
}

export default UserProfile;
