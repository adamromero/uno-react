import React from 'react';
import deck from "../deck";

const Hand = cards => {
	return (
		<div>
			{cards.cards.map((card, index) => (
				<div key={index}>{card.type}</div>
			))}
		</div>
	)
}

export default Hand;