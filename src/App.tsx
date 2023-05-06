import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";

function App() {
  return (
    <div className={"min-h-screen"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
