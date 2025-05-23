// This file is responsible for the higher-level functions of the game.
// The cards.js file contains low-level functions for managing a deck of cards.

document.addEventListener("DOMContentLoaded", () => {
  window.app = { }
  window.app.buttons = { }
  window.app.buttons.hit = document.querySelector("#hit")
  window.app.buttons.stand = document.querySelector("#stand")
  window.app.buttons.reset = document.querySelector("#reset")

  window.app.buttons.hit.addEventListener("click", (e) =>{
    dealCardToPlayer()
  })
  window.app.buttons.stand.addEventListener("click", (e) =>{
    playAsComputer()
  })
  window.app.buttons.reset.addEventListener("click", (e)=>{
    resetGame()
  })

// window.app.buttons.hit.addEventListener("click", onHitClicked)
//   window.app.buttons.stand.addEventListener("click", onStandClicked)
//   window.app.buttons.reset.addEventListener("click", onResetClicked)
  
  window.app.human_card_area = document.querySelector("#human_cards")
  window.app.computer_card_area = document.querySelector("#computer_cards")
  window.app.status = document.querySelector("#status")

  resetGame();
})


// Event handlers for each of the three main buttons
// --------------------------------------------------
// function onHitClicked(e) {
//   dealCardToPlayer()
// }
// function onStandClicked(e) {
//   playAsComputer();
// }
// function onResetClicked(e) {
//   resetGame();
// }


// High-level game functions
// --------------------------------------------------

function resetGame() {
  window.app.deck = shuffledDeckOfCards();
  
  window.app.scores = { human: 0, computer: 0 }
  window.app.human_is_playing = true
  
  window.app.human_card_area.innerHTML = ""
  window.app.computer_card_area.innerHTML = ""

  displayStatus("It's your turn.")
  updateScore();
  updateButtons();

  // Human plays first
  playAsHuman();
}

function determineWinner() {
    if (window.app.scores.human > 21) {
        displayStatus("You went over 21 and lost.");
    } else if (window.app.scores.computer > 21){
        displayStatus("YOU WON!")
    } else if (window.app.scores.computer > window.app.scores.human) {
        displayStatus("The computer won.")
    } else if (window.app.scores.computer < window.app.scores.human) {
        displayStatus("YOU WON!")
    } else {
        displayStatus("It was a tie.")
    }
}

function playAsHuman() {
  // Human player starts with 2 cards
  dealCardToPlayer()
  dealCardToPlayer()
}


function playAsComputer() {
  window.app.human_is_playing = false
  displayStatus("Computer is playing...")

  updateButtons();
  dealCardToComputer();
}


// Dealing out cards
// ----------------------------------------

function dealCardToPlayer() {
    const table = document.querySelector("#human_cards")
    card = dealNextCard(table)
    window.app.scores.human = window.app.scores.human + card.value
    if (window.app.scores.human > 21){
        window.app.human_is_playing = false
        determineWinner()
    }
    updateScore();
    updateButtons();
    }

function dealCardToComputer() {
  const table = document.querySelector("#computer_cards")
  card = dealNextCard(table)

  window.app.scores.computer = window.app.scores.computer + card.value

  if (window.app.scores.computer >= 17) {
    determineWinner()
  } else {
    setTimeout(dealCardToComputer, 1000);
  }
  updateScore();
  updateButtons();
}

// Lower-level game functions
// --------------------------------------------------

function updateScore() {
  document.querySelector("#human_score").textContent = window.app.scores.human
  document.querySelector("#computer_score").textContent = window.app.scores.computer
}

function updateButtons() {
    if(!window.app.human_is_playing) {
        window.app.buttons.hit.style.visibility = 'hidden'
        window.app.buttons.stand.style.visibility = 'hidden'
    }
    else{
        window.app.buttons.hit.style.visibility = 'visible'
        window.app.buttons.stand.style.visibility = 'visible'
    }
}

function displayStatus(str) {
  window.app.status.textContent = str
}


