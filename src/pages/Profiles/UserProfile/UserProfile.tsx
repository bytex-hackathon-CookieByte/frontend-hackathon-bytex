import React from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import Badges from "../components/Badges";
import ChallangesCard from "../components/ChallangesCard";
import SkillsCard from "../components/SkillsCard";
function UserProfile() {
  const { userId } = useParams();

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-2 col-span-1">
        <UserInfo userId={userId} />
        <Badges />
        <ChallangesCard />
        <SkillsCard />
      </div>
    </div>
  );
}

export default UserProfile;
