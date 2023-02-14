const highScoreStored = localStorage.getItem('highScore');
const highScoreElement = document.querySelector('.high_score');
const guessesElement = document.querySelector('.guesses');
const scoreElement = document.querySelector('.score');

// stores high score of 0 in local storage if first time loaded
if (highScoreStored === null) {
  localStorage.setItem('highScore', 0);
  highScoreElement.innerHTML = 0;
}
else {
  // otherwise retrieve high score from local storage
  highScoreElement.innerHTML = highScoreStored;
}

let guesses = 0;
let score = 0;
let cardCount = 0;
let matches = 0;
let cardsPicked = [];
let cardsMatched = [];
const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// Fisher Yates algorithm
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    cardCount++;
    const newDiv = document.createElement("div");
    newDiv.id = `${color}${cardCount}`;
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    if (cardCount === 6) {
      let br = document.createElement('br');
      gameContainer.append(br);
    }
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // prevent already matched cards from being added to current guess if clicked
  if (!cardsMatched.includes(event.target)){
    // prevent clicking more than two cards
    const card = event.target;
    if (cardsPicked.length < 2) {
      cardsPicked.push(card);
      card.style.background = card.classList[0];
      // evaluate guess once two cards are clicked
      if (cardsPicked.length === 2) {
        // if the same card is clicked twice then remove from cardsPicked
        if (cardsPicked[0].id === cardsPicked[1].id) {
          cardsPicked.pop();
        }
        else {
          // otherwise evaluate and increment guess count
          guesses++;
          guessesElement.innerHTML = guesses;
          //compare colors of the two cards for match
          if (cardsPicked[0].classList[0] == cardsPicked[1].classList[0] ) {
            matches++;
            cardsMatched.push(cardsPicked[0]);
            cardsMatched.push(cardsPicked[1]);
            // if number of matches equals total possible, then end game
            // store score if it beats high score
            // clear and reload the game div
            if (matches === COLORS.length / 2) {
              score = Math.floor(matches * 500 / guesses);
              if (score > parseInt(highScoreStored)) {
                localStorage.setItem('highScore', score);
                highScoreElement.innerHTML = score;
                alert(`Game won with a new high score of ${score}`);
              }
              else {
                alert(`Game won with a score of ${score}`);
              }
              reset();
            }
            // if game hasn't ended then clear cardsPicked
            else
              cardsPicked = [];
          }
          // if no match then pause for one second then clear cardsPicked
          else {
            countdown(1);
          } 
        }
      }
    } 
  }
}

function countdown(n) {
  let func = function() {
    n--;
    if (n === 0) {
      clearInterval(timer);
      cardsPicked[0].style.background = '';
      cardsPicked[1].style.background = '';
      cardsPicked = [];
    }
  }
  let timer = setInterval(func, 1000);
}

function reset() {
  const game = document.querySelector('#game');
  game.innerHTML = '';
  guessesElement.innerHTML = guesses = score = cardCount = matches = 0;
  cardsMatched = cardsPicked = [];
  createDivsForColors(shuffle(COLORS))
}

// when the DOM loads
createDivsForColors(shuffle(COLORS));
const btnNewGame = document.querySelector('.newgame');
btnNewGame.addEventListener('click', reset);