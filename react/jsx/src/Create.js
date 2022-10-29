import React from "react";
const Name = "Aman Singh";
var year = new Date();
var options = {
  year: "numeric",
};
function Create() {
  return (
    <div>
      <p>Createed By {Name}</p>
      <p>Copyright {year.toLocaleDateString("en-US", options)} </p>
    </div>
  );
}

export default Create;
