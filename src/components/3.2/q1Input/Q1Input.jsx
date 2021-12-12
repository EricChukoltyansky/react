import React from "react";
import "./q1Input.css";

function Q1Input() {
  return (
    <div>
      <input type="range" name="likeness" id="likeness" min="0" max="100" />
    </div>
  );
}

export default Q1Input;