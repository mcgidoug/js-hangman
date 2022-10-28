import { words } from "./words.js";
// global variables
let alphabet = document.querySelectorAll(".letters");
let startButton = document.querySelector("#start-button");
let cpuChoice = document.querySelector(".cpu-choice");
let playerChoice = document.querySelector(".player-choice");

// functions
function startGame() {
  console.log("START");
}

function alphabetLetters() {
  console.log("ALPHA LETTER");
}

// event listeners
startButton.addEventListener("click", startGame);
