'use strict';
// Selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const curr0 = document.getElementById('current--0');
const curr1 = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNEw = document.querySelector('.btn--new');

let currscore = 0;

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

btnroll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  if (dice != 1) {
    currscore = currscore + dice;
    curr0.textContent = currscore;
  } else {
    

  }
});
