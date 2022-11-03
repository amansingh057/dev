import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [clicked, setTrue] = useState(false);
  const [heading, setHeading] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event) {
    setTrue(true);
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      {/* <h1>{clicked ? name : "Hello"}</h1> */}
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
