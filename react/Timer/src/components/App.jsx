import React, { useState } from "react";
import Time from "./Time";

function App() {
  const [count, setCount] = useState(0);
  function inc() {
    // count++;999
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <>
      <Time />
      <div className="container">
      <button onClick={inc}>+</button> 
        <h1 style={{width:"auto"}} >{count}</h1>
        <button onClick={dec}>-</button>
      </div>
    </>
  );
}

export default App;
