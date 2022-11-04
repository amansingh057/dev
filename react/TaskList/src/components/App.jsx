import React, { useState } from "react";

function App() {
  const [text, SetText] = useState("");
  const [list, setList] = useState([]);
  function handleChange(event) {
    const val = event.target.value;
    SetText(val);
  }
  function handleClick() {
    setList((prev) => {
      return [...prev, text];
    });
    SetText("");
    console.log(list);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => {
            return <li>{item}</li>;
          })}
          {/* <li>A Item</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
