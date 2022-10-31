import React from "react";
import contacts from "../contacts";
import Avtar from "./Avtar";
import Details from "./Details";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avtar img = {props.image}/>
      </div>
      <div className="bottom">
        <Details item={props.tel}/>
        <Details item={props.mail}/>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <h1 className="heading">My Contacts</h1>
        <Avtar img ="https://media-exp1.licdn.com/dms/image/C5603AQF3Uhobos7oOA/profile-displayphoto-shrink_800_800/0/1641667717293?e=1672876800&v=beta&t=ogFeIYMfr8Tu3vHUrGrNsvgQvTDEVo_W4hNuK3crwl4"/>
        <Card name={contacts[0].name} image = {contacts[0].imgURL} tel ={contacts[0].phone} mail ={contacts[0].email}/>
        <Card name={contacts[1].name} image = {contacts[1].imgURL} tel ={contacts[1].phone} mail ={contacts[1].email}/>
        <Card name={contacts[2].name} image = {contacts[2].imgURL} tel ={contacts[2].phone} mail ={contacts[2].email}/>
        
      </div>
    </>
  );
}

export default App;
