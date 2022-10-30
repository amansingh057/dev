import React from "react";

const date = new Date();
const time = date.getHours();
let greet = "Good morning";
var style = {
  color: "red",
};
if (time >= 12 && time < 18) {
  greet = "Good Afternoon";
  style.color = "green";
} else if (time >= 18) {
  greet = "Good Evening";
  style.color = "blue";
}
function Time() {
  return (
    <div>
      <h1 style={style}>{greet}</h1>
    </div>
  );
}

export default Time;
