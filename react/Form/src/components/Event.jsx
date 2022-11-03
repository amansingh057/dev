import React, { useState } from "react";

function Event() {
  const [headText, setheadText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function habdleClick() {
    // console.log("Clicked");
    setheadText("Submitted");
  }
  function mouseIn() {
    console.log("change");
    setMouseOver(true);
  }
  function mouseOut() {
    // console.log("change");
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={habdleClick}
        onMouseOver={mouseIn}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default Event;
