import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { availableAvatars } from "../images/Avatars/avatars";

type noop = () => void;

type UserContextType = {
  isLoggedIn: boolean;
  id: string;
  type: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  tokens: number;
  login: (username: string, password: string, toLogin: noop) => void;
  logout: noop;
  setTokens: (val: number) => void;
  getSelectedAvatar: () => string;
  getOwnedAvatars: () => string[];
  addAvatar: (val: string) => string;
  setAvatar: (val: string) => void;
};

const defaultState: UserContextType = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  id: "",
  type: "",
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  avatar: "",
  tokens: 500,
  login: () => {},
  logout: () => {},
  setTokens: () => {},
  getSelectedAvatar: () => `[${availableAvatars[0]}]`,
  getOwnedAvatars: () => [availableAvatars[0]],
  addAvatar: (val) => "",
  setAvatar: (val) => {},
};

export const UserContext = createContext<UserContextType>(defaultState);

function UserContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(defaultState.isLoggedIn);
  const [id, setId] = useState(defaultState.id);
  const [type, setType] = useState(defaultState.type);
  const [username, setUsername] = useState(defaultState.username);
  const [firstName, setFirstname] = useState(defaultState.firstName);
  const [lastName, setLastName] = useState(defaultState.lastName);
  const [email, setEmail] = useState(defaultState.email);
  const [avatar, setAvatar] = useState(defaultState.avatar);
  const [tokens, setTokens] = useState(defaultState.tokens);

  const getSelectedAvatar = () => {
    return (
      avatar
        ?.split("/")
        ?.find((avatar) => avatar[0] === "[")
        ?.slice(1, -1) || availableAvatars[0]
    );
  };

  const getOwnedAvatars = () => {
    return (
      avatar
        ?.split("/")
        ?.map((avatar) =>
          avatar[0] === "[" ? avatar?.slice(1, -1) : avatar
        ) || []
    );
  };
  const addAvatar = (newAvatar: string) => {
    return avatar.concat("/" + newAvatar).replaceAll("/", "%2F");
  };

  const login = (username: string, password: string, toHome: noop) => {
    axios
      .post("http://localhost:8080/login", { username, password })
      .then((res) => {
        console.log(res.data);
        setIsLoggedIn(true);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        setType(res.data.type);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setAvatar(res.data.avatar);
        setId(res.data.id);
        setFirstname(res.data.firstName);
        setLastName(res.data.lastName);
        setTokens(res.data.tokens);
        toHome();
      })
      .catch((err) => {
        toast.error(err?.response?.data || err.message);
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    toast.success("Logged out!");
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
    console.log({ isLoggedIn, username });
  }, [isLoggedIn]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        id,
        type,
        username,
        email,
        firstName,
        lastName,
        avatar,
        tokens,
        login,
        logout,
        setTokens,
        getSelectedAvatar,
        getOwnedAvatars,
        addAvatar,
        setAvatar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
