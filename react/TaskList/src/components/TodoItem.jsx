import React from "react";

function TodoItem(props) {
  //   const [press, setPress] = useState(false);
  //   function handleCLick() {
  //     setPress((prevValue) => {
  //       return !prevValue;
  //     });
  //   }

  return (
    // <div onClick={handleCLick}>
    //   <li style={{ textDecoration: press ? "line-through" : "none" }}>
    //     {props.text}
    //   </li>
    // </div>
    <div onClick={()=>{
        props.onCheck(props.id)
    }}>
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;
