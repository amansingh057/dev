import React, { useState } from "react";

function ComplexState() {
  // const [fname, setFname] = useState("");
  // function enterName(event) {
  //   setFname(event.target.value);
  // }
  // const [lname, setLname] = useState("");
  // function enterLName(event) {
  //   setLname(event.target.value);
  // }
  const [fullName, setName] = useState({
    fName: "",
    lName: ""
  });
  function handleChange(event) {
    // const newVal = event.target.value;
    // const inputName = event.target.name;
    const { value, name } = event.target;
    setName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ComplexState;
