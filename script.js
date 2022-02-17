'use strict';

const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highscore = 0;

function displayMessage(msg) {
     document.querySelector('.message').innerText = msg;    
}

if (localStorage.getItem('highscore')) {
     document.querySelector('.highscore').innerText = localStorage.getItem('highscore');
}

document.querySelector('.check').addEventListener('click', function() {
     const guess = Number(document.querySelector('.guess').value);

     if (!guess) {
          displayMessage('⛔ No Number');
     } else if (guess === secretNum) {
          displayMessage('🎉 Correct Number');
          document.querySelector('.number').textContent = secretNum;

          document.body.style.backgroundColor = '#60b347';
          document.querySelector('.number').style.width = '30rem';

          if (score > highscore) {
               highscore = score;
               localStorage.setItem('highscore', highscore);
               document.querySelector('.highscore').innerText = highscore;
          }
     } else if (guess !== secretNum) {
          if (score > 1) {
               displayMessage(guess > secretNum ? '📈 Too High' : '📉 Too Low');

               score--;
               document.querySelector('.score').innerText = score;
          } else {
               displayMessage('😭 You lost the game!');
               document.querySelector('.score').innerText = 0;
          }
     }
});

document.querySelector('.again').addEventListener('click', function() {
     window.location.reload();
});