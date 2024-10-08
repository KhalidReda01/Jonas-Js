'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // when there  is no input
    // document.querySelector('.message').textContent = ' NO number';
    // when player wins
    displayMessage(' NO number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    // document.querySelector('.message').textContent = ' Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess  is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high!📈' : 'Too low!📈';
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📈');
    } else {
      // document.querySelector('.message').textContent = 'YOu lost the game';
      // document.querySelector('.message').textContent =
      displayMessage('YOu lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// when guess  is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = 'Too high!📈';
//   } else {
//     document.querySelector('.message').textContent = 'YOu lost the game';
//     document.querySelector('.score').textContent = 0;
//   }
//   // when guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     score--;
//     document.querySelector('.message').textContent = 'Too low!📈';
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'YOu lost the game';
//     document.querySelector('.score').textContent = 0;
//   }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent ='Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
