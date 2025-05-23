// This code is responsible for representing a deck of cards.
// You can tell it deal the next card onto the screen,
// and you can also tell it to give you a new, shuffled deck of cards.

// Given a container element, this function will "deal" the next card from the deck.
function dealNextCard(container) {
  const card_object = window.app.deck.pop();
  let cardElement = document.createElement("img")
  cardElement.src = card_object.filename
  container.appendChild(cardElement);

  return card_object
}

function shuffledDeckOfCards() {
  faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]
  suits = ["clubs", "spades", "hearts", "diamonds"]
  
  // Create a deck of cards
  deck = []
  for (face of faces) {
    for (suit of suits) {
      card = { face: face, suit: suit, value: faceValueOf(face), filename: `images/${face}_of_${suit}.png` }
      deck.push(card)
    }
  }

  // Now, shuffle the deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck
}

function faceValueOf(face) {
  value = parseInt(face)
  if (!(value > 0)) {
    if (face == 'jack' || face == 'queen' || face == 'king') {
      value = 10
    } else {
      value = 11; // Aces are always considered to worth 11
    }
  }
  return value
}
