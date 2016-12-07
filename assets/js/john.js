'use strict';
console.log('the john.js script has loaded.');
/********************************
***UNIVERSAL VARIABLE DECLATION**
********************************/
var rightAnswers = 0;
var wrongAnswers = 0;

//Player generator station.
var name = '';
var difficulty = 'easy';
var speed = 'easy';
var newPlayer;

/********************************
****FORM INPUT AND LISTENER******
********************************/

var submitPlayerInfo = document.getElementById('form');
submitPlayerInfo.addEventListener('submit', clickHandler);

function clickHandler(){
  event.preventDefault();
//use player choices to determine game based on form values.
  name = event.target.userName.value;
  difficulty = event.target.difficulty.value;
  speed = event.target.speedType.value;

  var playerInfo = new PlayerObj(name, difficulty, speed);
  newPlayer = playerInfo;
  console.log('the player has chosen: ', newPlayer.name, newPlayer.difficulty, newPlayer.speed);


  /****************************
  *******TIMER SETTINGS********
  ****************************/

  var intervalID = window.setInterval(playAddRound, gameClock());
  function gameClock() {
    var gameLength = newPlayer.speed;
    var timeSpan = 0;
    switch (gameLength) {
     case 'easy':
      timeSpan = 20000;
      break;
     case 'medium':
      timeSpan = 10000;
      break;
     case 'hard':
      timeSpan = 5000;
      break;
    // end of switch statement. Remember, it measures in milliseconds
    }

    return timeSpan;

  // end of function
  };

  






// END OF clickHandler FUNCTION.
}


/***************************
*****PLAYER/USER OBJECT*****
****************************/
//REMEMBER: Functions go on prototypes, properties go on constructors.
// The folloWing is the player/user constructor function.
// 'this' refers to the object being constructed for you
// it also changes when you use the 'new' reserved word to make a
// new instance of the object

function PlayerObj(name, difficulty, speed) {
  this.name = name;
  this.difficulty = difficulty;
  this.speed = speed;
  this.currentScore = 0;
  this.highScore = 0;
  this.wins = 0;
  this.loses = 0;
  this.winLossRatio = this.wins / (this.wins + this.loses);

};




/*
*****************************
**NUMBER GENERATION SETTINGS*
*****************************

REMEMBER: Math.random() generates a random number between 0 - 1.
code academy explanation: URL: https://goo.gl/5FLRWv
 So, if x = start and y = end, you would do the following:

Add x so the starting point changes from the default 0 to x
multiply by y-x so the ending point changes from the default 1 to y
when using Math.floor(), remember to +1 to y-x to
accomodate the rounding downward to its nearest integer.

Formula:
Math.floor(Math.random() * ((y-x)+1) + x);
*/

// EASY numbers are single digits
function easyNumbers() {
  return Math.floor(Math.random() * ((10 - 5) + 1) + 1);
};

// MEDIUM numbers are double digits
function mediumNumbers() {
  return Math.floor(Math.random() * ((100 - 10) + 1) + 10);
};

// HARD numbers are triple digits, but less than 1000
function hardNumbers() {
  return Math.floor(Math.random() * ((999 - 100) + 1) + 100);
};

//END OF NUMBER GENERATION SETTINGS



/****************************
***PLAY ROUND SETTINGS*******
****************************/
// this will play one simple round, using only add functions.


function playAddRound() {
  var a = easyNumbers();
  var b = easyNumbers();
  var trueAnswer = a + b;
  var msg = 'Welcome to the KidsMathGame! Solve the correct question and you can advance to the next round!';
  var userAnswer = prompt(msg + '\n\nWhat do ' + a + ' + ' + b + ' equal when you add them together?', '0');
  parseInt(userAnswer, 10);
  console.log(userAnswer);

  if(userAnswer != trueAnswer) {
    alert('Sorry, that is the wrong answer! You guessed: ' + userAnswer + '; \nBut the correct answer is: ' + trueAnswer);
    console.log('The user wrote: ' + userAnswer);
    console.log('The correct answer was: ' + trueAnswer);
    newPlayer.loses++;
    return ++wrongAnswers;
  } else {
    alert('Good, you got it! ' + a + ' and ' + b + ' equal ' + userAnswer);
    console.log('The user wrote: ' + userAnswer);
    newPlayer.wins++;
    return ++rightAnswers;
  }
//end of playAddRound function
};

//this round is supposed to take in
// function playKidsGame(){
//
// };



//END OF PLAY ROUND FUNCTIONS
