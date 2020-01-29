import React from 'react';
import Hand from "./Components/Hand";
import deck from "./deck";

import './App.css';

function dealHand() {
  let hand = [];
  for (let i = 0; i < 7; i++) {
    const random = Math.floor(Math.random() * deck.length);
    hand.push(deck.splice(random, 1));
  }
  return hand;
}

function App() {
  return (
    <div className="App">
      <h1>Uno</h1>
      {deck.map((card, index) => (
        <div className={`card ${card.suit}`} key={index}>{card.type}</div>
      ))}
      <Hand cards={dealHand()} />
    </div>
  );
}

export default App;
