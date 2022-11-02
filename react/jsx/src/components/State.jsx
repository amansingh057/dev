import React from 'react'

function State() {
    //Declarative programming
    var isDone = true 

    const strikeThrough = {textDecoration: "line-through"}
    function strike(){
        isDone=true
        document.getElementById("root").style.textDecoration="line-through"
    }
    function Unstrike(){
        isDone=false
        document.getElementById("root").style.textDecoration=null
    }
  return (
    <div>
        <p style={isDone ? strikeThrough :null}>Buy Milk</p>
        {/* <p >Buy Milk</p> */}
        <button onClick={strike}>Change to strike</button>
        <button onClick={Unstrike}>Change to Unstrike</button>
    </div>
    
  )
}

export default State