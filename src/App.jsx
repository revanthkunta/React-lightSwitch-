import React from "react";
import "./App.css";
import { useState } from "react";
 
export default function App() {
  const [on, setOn] = useState(true);
 
  function change() {
    setOn((prevOn) => !prevOn);
  }
  return (
    <div className={on ? "white" : "dark"}>
      <h1>{on ? 'Switch ON "LIGHT"' : 'Switch OFF "LIGHT"'}</h1>
      <button onClick={change}></button>
    </div>
  );
}