'use strict';

// console.log(document.querySelector('.message').textContent);

// //Setting text content for element
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.secretNumber').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Implementing Event Listner from Handling click events Session.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoring = document.querySelector('.score').textContent;
let highscore = 0;
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  console.log(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter Number.......!!!';
  }
  //when player wins
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number.......!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (scoring > highscore) {
      highscore = scoring;
      document.querySelector('.highscore').textContent = scoring;
    }
  }
  //When player enters High number
  else if (guess > secretNumber) {
    if (scoring > 0) {
      document.querySelector('.message').textContent =
        'Tooooo High Number.......!!!';
      scoring--;
      document.querySelector('.score').textContent = scoring;
    } else {
      document.querySelector('.message').textContent =
        'Regrets...Lost The gamee';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when player enters high number
  else if (guess < secretNumber) {
    if (scoring > 0) {
      document.querySelector('.message').textContent =
        'Tooooo low Number.......!!!';
      scoring--;
      document.querySelector('.score').textContent = scoring;
    } else {
      document.querySelector('.message').textContent =
        'Regrets...Lost The gamee';
      document.querySelector('.score').textContent = 0;
    }
  }
  // console.log(document.querySelector('.score').textContent);
});

//Again Functionality

document.querySelector('.again').addEventListener('click', () => {
  scoring = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing........';
  document.querySelector('.score').textContent = scoring;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  //document.querySelector('.highscore').textContent = hs;
});
