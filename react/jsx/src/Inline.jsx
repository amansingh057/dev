import React from 'react'
const customStyle ={color:"red",
fontSize:"20px",
border:"1px solid black",
}
customStyle.color="blue"
function Inline() {
  return (
    <div>
        <h1 style={customStyle}>Hello World</h1>
    </div>
  )
}

export default Inline