import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

type noop = () => void;

type UserContextType = {
  isLoggedIn: boolean;
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  login: (username: string, password: string, toLogin: noop) => void;
  logout: noop;
};

const defaultState: UserContextType = {
  isLoggedIn: false,
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
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

  const login = (username: string, password: string, toHome: noop) => {
    console.log({ username, password });
    //on success
    setIsLoggedIn(true);
    toast("Logged out!");
    toHome();
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        username,
        firstName,
        lastName,
        avatar,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
