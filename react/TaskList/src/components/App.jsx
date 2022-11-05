import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";

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
  function deleteItem(id) {
    setList((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index !==id
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* <div className="form">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div> */}
      <InputArea onChange={handleChange} value={text} onClick={handleClick}/>
      <div>
        <ul>
          {list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                onCheck={deleteItem}
                text={item}
              />
            );
          })}
          {/* <li>A Item</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
