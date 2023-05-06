import React from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../components/UserInfoCard";
import Badges from "../components/BadgesCard";
import SkillsCard from "../components/SkillsCard";
import ChallengesCard from "../components/ChallengesCard";
function UserProfile() {
  const { userId } = useParams();

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-2 col-span-1">
        <UserInfo userId={userId} />
        <Badges />
        <ChallengesCard />
        <SkillsCard />
      </div>
    </div>
  );
}

export default UserProfile;
