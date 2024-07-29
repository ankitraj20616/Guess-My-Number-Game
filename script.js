'use strict';

let comp_guess = Math.trunc(Math.random() * 21);
let highscore = Number(document.querySelector('.highscore').textContent);
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let user_guess = Number(document.querySelector('.guess').value);

  if (user_guess === 0) {
    displayMessage('Please enter a number...');
  } else if (comp_guess === user_guess) {
    displayMessage('You Guessed it right😎');
    document.querySelector('.number').textContent = comp_guess;
    highscore = score > highscore ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    if (user_guess > comp_guess) {
      displayMessage('Too High🙄');
    } else {
      displayMessage('Too Low🙄');
    }
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  comp_guess = Math.trunc(Math.random() * 21);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
