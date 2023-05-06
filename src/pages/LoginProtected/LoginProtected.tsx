import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Layout } from "antd";
import { UserContext } from "../../context/UserContext";

function LoginProtected() {
  const { isLoggedIn, login } = useContext(UserContext);
  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/login" />;
  } else {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    login(username || "", password || "", () => {});
  }
  return (
    <Layout className={"min-h-screen"}>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  );
}

export default LoginProtected;
