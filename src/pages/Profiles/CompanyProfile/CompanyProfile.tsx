import React from "react";
import { useParams } from "react-router-dom";

function CompanyProfile() {
  const { companyId } = useParams();

  return <div>CompanyProfile: {companyId}</div>;
}

export default CompanyProfile;
