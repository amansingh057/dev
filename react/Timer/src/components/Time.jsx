import React, { useState } from "react";

function Time() {
  setInterval(getTime, 1000);
  let time = new Date().toLocaleTimeString();
  console.log(time);
  const [currTime, setTime] = useState(time);
  function getTime() {
    // console.log("click")
    let newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={getTime}>Timerrrr</button>
    </div>
  );
}

export default Time;
