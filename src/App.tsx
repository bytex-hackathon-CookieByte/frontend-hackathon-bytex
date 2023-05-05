import React from "react";
import "./App.css";
import { Button } from "antd";
import { toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button onClick={() => toast.success("Hello")}>Click me</Button>
    </div>
  );
}

export default App;
