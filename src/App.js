import React, { useState, useEffect } from "react";
import Hand from "./Components/Hand";
import deck from "./deck";

import "./App.css";

const dealHand = () => {
   let hand = [];
   for (let i = 0; i < 7; i++) {
      const random = Math.floor(Math.random() * deck.length);
      hand.push(deck.splice(random, 1)[0]);
   }
   return hand;
};

function App() {
   const [cardDeck, setCardDeck] = useState([]);
   const [hand, setHand] = useState([]);

   useEffect(() => {
      setCardDeck(deck);
   }, [cardDeck]);

   const handleDeal = () => {
      setHand(dealHand);
   };

   return (
      <div className="App">
         <h1>Uno</h1>
         <div>
            <button onClick={handleDeal}>Deal</button>
         </div>
         <div className="deck">
            {deck.map((card, index) => (
               <div className={`card ${card.suit}`} key={index}>
                  {card.type}
               </div>
            ))}
         </div>
         <Hand cards={hand} />
      </div>
   );
}

export default App;
