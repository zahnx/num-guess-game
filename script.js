'use strict';

// Setting Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions
// display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// change the secret number box-shadow
const changeShadowColor = function (color) {
  document.querySelector('.secret-number').style.boxShadow = color;
};

console.log(`Secret Number: ${secretNumber}`);

document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess-number').value);
  console.log(guess, typeof guess, !guess);

  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 That was the right code!');
    changeShadowColor('10px 10px 10px 0.8px rgba(60, 255, 0, 0.6)');
    // Changing the background color
    document.querySelector('body').style.backgroundColor = 'green';
    // Revealing the secret number
    document.querySelector('.secret-number').textContent = secretNumber;

    // Changing the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //Change the box-shadow of secret number
      changeShadowColor('10px 10px 10px 0.8px rgba(253, 0, 0, 0.6)');
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('💥 You lost the game!');
    }
  }
});

document.querySelector('.btn.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess-number').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.secret-number').textContent = '?';
  displayMessage('Start guessing...');
  changeShadowColor('10px 10px 10px 0.8px rgb(0, 194, 253, 0.6)');
  console.log(secretNumber);
});
