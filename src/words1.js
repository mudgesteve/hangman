var wordList = require("word-list-json");



function randomWord(maxLength) {
  //const word = ((wordList[Math.floor(Math.random() * wordList.length)]).length <= maxWordLength) ? word : 'Bad word';
  let word;
  let goodWord = false;

  do {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    if (word.length <= maxLength) {
      goodWord = true;
    }
  } while (goodWord = false);
  //return wordList[Math.floor(Math.random() * wordList.length)];
}

export { randomWord };
