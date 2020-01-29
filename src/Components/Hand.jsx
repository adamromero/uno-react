import React from "react";
import deck from "../deck";

const Hand = props => {
   const cards = props.cards;

   return (
      <div>
         <div>Hand</div>
         {cards.map((card, index) => (
            <div className={`card ${card.suit}`} key={index}>
               {card.type}
            </div>
         ))}
      </div>
   );
};

export default Hand;
