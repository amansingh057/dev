import React from "react";
import emojipedia from "../emojipedia";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

function newEntry(emojiadd) {
  return (
    <Entry
      key ={emojiadd.id}
      emoji={emojiadd.emoji}
      name={emojiadd.name}
      meaning={emojiadd.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {
          emojipedia.map(newEntry)
        }
      </dl>
    </div>
  );
}

export default App;
