function cpuWordChoice() {
  let word = words[Math.floor(Math.random() * words.length)];
  let splitWord = word.split("");
  console.log(splitWord);
  return splitWord;
}
