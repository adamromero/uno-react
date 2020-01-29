
class Card {
	constructor(type, suit) {
		this.type = type;
		this.suit = suit;
	}
}

const suit = ["red", "yellow", "green", "blue"];
const numberType = ["0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "R", "R", "S", "S", "+2", "+2"];

let deck = [];
suit.forEach(s => {
	numberType.forEach(t => {
		deck.push(new Card(t, s));
	});
});

const otherType = ["W", "W", "W", "W", "+4", "+4", "+4", "+4"];
otherType.forEach(t => {
	deck.push(new Card(t, ""));
});

export default deck;