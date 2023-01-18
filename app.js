import { words } from "./words.js";
// ============================================================================
// query selectors
let alphabet = document.querySelectorAll(".letters");
let startButton = document.querySelector("#start-button");
let cpuChoice = document.querySelector(".cpu-choice");
let attemptsLeft = document.querySelector(".attempts-left");
// variables / counters
let wrongGuesses = 0;
let attempts = 5;

// functions
// ============================================================================
function randomWordChooser() {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  let cpuRandomWord = words[randomWordIndex];

  let arrayToBeFilled = new Array(cpuRandomWord.length).fill("X");
  cpuChoice.innerHTML = arrayToBeFilled.join(" ");
  attemptsLeft.innerHTML = attempts;

  // event listener for each alphabet button
  alphabet.forEach((button) => {
    button.addEventListener("click", (event) => {
      let userInput = event.target.textContent;
      if (cpuRandomWord.includes(userInput)) {
        // loop through the cpuRandomWord and replace the X with the matching letter
        for (let i = 0; i < cpuRandomWord.length; i++) {
          if (cpuRandomWord[i] === userInput) {
            arrayToBeFilled[i] = userInput;
          }
        }
        // update the innerHTML of the cpuChoice to show the new array
        cpuChoice.innerHTML = arrayToBeFilled.join(" ");
      } else {
        // code to handle wrong guesses
        wrongGuesses++;
        attempts--;
        attemptsLeft.innerHTML = attempts;
      }
    });
  });
  return arrayToBeFilled;
}

// event listeners
// ============================================================================
startButton.addEventListener("click", randomWordChooser);
