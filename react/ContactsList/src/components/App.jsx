import React from "react";
import contacts from "../contacts";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img
          src={props.image}
          alt="avatar_img"
          className="circle-img"
        />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <h1 className="heading">My Contacts</h1>
        <Card name={contacts[0].name} image = {contacts[0].imgURL} tel ={contacts[0].phone} mail ={contacts[0].email}/>
        <Card name={contacts[1].name} image = {contacts[1].imgURL} tel ={contacts[1].phone} mail ={contacts[1].email}/>
        <Card name={contacts[2].name} image = {contacts[2].imgURL} tel ={contacts[2].phone} mail ={contacts[2].email}/>
        
      </div>
    </>
  );
}

export default App;
