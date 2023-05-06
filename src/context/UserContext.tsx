import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

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

  const login = (username: string, password: string, toHome: noop) => {
    axios
      .post("http://localhost:8080/login", { username, password })
      .then((res) => {
        console.log(res.data);
        setIsLoggedIn(true);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
