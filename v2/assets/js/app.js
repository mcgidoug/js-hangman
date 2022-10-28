import { words } from "./words.js"

window.onload = function () {
  createButtons()
}

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

function createButtons() {
  let letterButtons = document.getElementById("letterButtons")
  for (let i = 0; i < alphabet.length; i++) {
    let letters = document.createElement("button")
    letters.innerHTML = alphabet[i]
    letterButtons.appendChild(letters)
  }
}
