import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Layout } from "antd";

function LoginProtected() {
  const isLoggedIn = true; //this should be changed with a proper way of checking if a user is logged in (bafta George)
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
