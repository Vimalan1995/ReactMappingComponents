import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(info) {
  return (
    <Card
      id={info.id}
      key={info.id}
      name={info.name}
      term={info.meaning}
      img={info.emoji}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
