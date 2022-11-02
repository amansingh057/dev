import React, { useState } from "react";

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
    <div className="container">
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default App;
