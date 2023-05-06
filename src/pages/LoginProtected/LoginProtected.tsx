import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Layout } from "antd";
import { UserContext } from "../../context/UserContext";

function LoginProtected() {
  const { isLoggedIn } = useContext(UserContext);
  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return (
    <Layout className={"min-h-screen"}>
      <Navbar />
      <Outlet />
    </Layout>
  );
}

export default LoginProtected;
