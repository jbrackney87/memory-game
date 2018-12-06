var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push("cardOne");
	console.log("User Flipped Queen");

var cardTwo = cards[2];
cardsInPlay.push("cardTwo");
	console.log("User Flipped King");

var cardThree = cards[1];
cardsInPlay.push("cardThree");
	console.log("User Flipped Queen");

var cardFour = cards[2];
cardsInPlay.push("cardFour");
	console.log("User Flipped King");

var checkForMatch = function () {	
	if (cardsInPlay[0]) === cardsInPlay[1] {
		alert("You found a Match!"); 
		} else  {
			alert("Sorry, try again.");
		}
		


	




