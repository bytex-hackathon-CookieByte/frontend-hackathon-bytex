import React from "react";
import NotFound from "../pages/NotFound/NotFound";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginProtected from "../pages/LoginProtected/LoginProtected";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Challenges from "../pages/Challenges/Challenges";
import UserProfile from "../pages/Profiles/UserProfile/UserProfile";
import CompanyProfile from "../pages/Profiles/CompanyProfile/CompanyProfile";
import Shop from "../pages/Shop/Shop";
import MyChallenges from "../pages/MyChallenges/MyChallenges";
import Courses from "../pages/Courses/Courses";
import CompanyChallenges from "../pages/Challenges/CompanyChallenges";
import MemoryGame from "../pages/Games/MemoryGame/MemoryGame";
import TypingGame from "../pages/Games/TypingGame/TypingGame";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <LoginProtected />,
    children: [
      {
        path: "/home",
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/index",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "profile/user",
        element: <UserProfile />,
        children: [{ path: ":userId", element: <UserProfile /> }],
      },
      {
        path: "profile/company",
        element: <CompanyProfile />,
        children: [{ path: ":companyId", element: <CompanyProfile /> }],
      },
      {
        path: "/challenges",
        element: <CompanyChallenges />,
      },
      {
        path: "/my-challenges",
        element: <MyChallenges />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/games",
        children: [
          { path: "memory", element: <MemoryGame /> },
          { path: "typing", element: <TypingGame /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
