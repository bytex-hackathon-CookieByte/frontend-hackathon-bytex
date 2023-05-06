import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type noop = () => void;

type UserContextType = {
  isLoggedIn: boolean;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  tokens: number;
  login: (username: string, password: string, toLogin: noop) => void;
  logout: noop;
};

const defaultState: UserContextType = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  username: "",
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
  const [username, setUsername] = useState(defaultState.username);
  const [firstName, setFirstname] = useState(defaultState.firstName);
  const [lastName, setLastName] = useState(defaultState.lastName);
  const [avatar, setAvatar] = useState(defaultState.avatar);
  const [tokens, setTokens] = useState(defaultState.tokens);

  const login = (username: string, password: string, toHome: noop) => {
    console.log({ username, password });
    //on success
    setIsLoggedIn(true);
    toHome();
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
        username,
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
