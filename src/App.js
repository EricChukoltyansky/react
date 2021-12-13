import Button from "./components/4.1/Button";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <Button text="important" /> <Button text={<strong>"not important"</strong>} />
    </>
  );
}

export default App;
