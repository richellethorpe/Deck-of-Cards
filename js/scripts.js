//for each suit we want to add a corresponding increment

const cardDeck = [];
const suits = ['clubs', 'hearts', 'spades', 'diamonds'];
const increments = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', 'Jack', 'Queen', 'King'];

const ul = document.getElementById("list");
suits.forEach(suit => {
  increments.forEach(increment => {
    cardDeck.push(increment.concat(" of " + suit))
  })
})

cardDeck.forEach(element => {
  const li = document.createElement('li');
  li.append(element);
  ul.append(li);
})