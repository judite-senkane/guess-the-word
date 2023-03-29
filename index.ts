const prompts = require('prompts');

(async () => {
  const words: string[] = ['codelex', 'coding', 'programming', 'typescript'];
  const word: string = words[Math.floor(Math.random() * words.length)];
  const wordParts: string[] = word.split('');

  let targetWord: string[] = '_'.repeat(word.length).split('');

  let guesses: number = 0;
  const maxGuesses: number = word.length + 3;

  console.log(targetWord.join(' '));

  while (guesses < maxGuesses) {
    const response = await prompts({
      type: 'text',
      name: 'letter',
      message: 'Enter a letter:',
    });
    guesses++;

    const letterPosition: number = wordParts.indexOf(response.letter);

    if (letterPosition > -1) {
      targetWord[letterPosition] = response.letter;
      wordParts[letterPosition] = '-';

      if (word === targetWord.join('')) {
        console.log('Correct! The word was: ' + word);

        break;
      }
    }
    console.log(targetWord.join(' '));
  }
  if (word !== targetWord.join('')) {
    console.log('Wrong! the word was: ' + word);
  }
})();
