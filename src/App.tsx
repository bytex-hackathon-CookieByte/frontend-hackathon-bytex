import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className={"min-h-screen"}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
}

export default App;
