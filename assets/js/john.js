'use strict';
/********************************
***UNIVERSAL VARIABLE DECLATION**
********************************/
var rightAnswers = 0;
var wrongAnswers = 0;
String.prototype.wordSearch = function(arg) {
  return this.toLowerCase().indexOf(arg);
};

//Player generator station.
var name = document.getElementByID('form');
name.addEventListener('click', clickHandler);

function clickHandler(){
  event.preventDefault();

}


var difficulty = function() {
  do {
    difficulty = prompt('What difficulty setting do you want? Please type in \n0 for Easy, \n1 for medium and \n2 for hard.');
    switch(difficulty) {
      //issue:
    case '0':
    case 'easy':
      alert('You have chosen: easy');
      difficulty = 'easy';
      console.log('Player ' + name + ' has chosen easy mode');
      break;

    case '1':
    case 'medium':
      alert('You have chosen: Medium');
      difficulty = 'medium';
      console.log('Player ' + name + ' has chosen medium difficulty');
      break;

    case '2':
    case 'hard':
      alert('You have chosen: Hard');
      difficulty = 'hard';
      console.log('Player ' + name + ' has chosen hard. difficulty');
      break;

    default:
      alert('You have to make a valid choice. I will repeat the options again. ');
      console.log('Player ' + name + 'has made an invalid choice.');
      difficulty = 'runAgain';
    }

  } while (difficulty == 'runAgain');
  //end of difficulty variable function
  return difficulty;

};
//and this here invokes our variable. comment the below line out and it will never run.
// difficulty();

var speed = function() {
 var msg = 'What speed setting do you want? Please type in \n0 for Easy (20 sec), \n1 for medium (10 seconds) and \n2 for hard (5 seconds).'
  do {
    difficulty = prompt(msg);
    switch(difficulty) {
      //issue:
    case '0':
    case 'easy':
      alert('You have chosen speed: Easy (20 sec).');
      difficulty = 'easy';
      console.log('Player ' + name + ' has chosen Easy (20 sec)');
      break;

    case '1':
    case 'medium':
      alert('You have chosen speed: Medium (10 seconds)');
      difficulty = 'medium';
      console.log('Player ' + name + ' has chosen medium (10 seconds)');
      break;

    case '2':
    case 'hard':
      alert('You have chosen: Hard (5 seconds)');
      difficulty = 'hard';
      console.log('Player ' + name + ' has chosen hard (5 seconds).');
      break;

    default:
      alert('You have to make a valid choice. I will repeat the options again. ');
      console.log('Player ' + name + ' has made an invalid choice.');
      difficulty = 'runAgain';
    }

  } while (difficulty == 'runAgain');

  return difficulty;

};
//and we invoke the variable here.
// speed();

//and now the creation of the newPlayer.

var newPlayer = new PlayerObj(name, difficulty(), speed());
console.log('the player chose: ', newPlayer.name, newPlayer.difficulty, newPlayer.speed);

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
  var score_current = 0;
  var score_high = 0;
  var wins = 0;
  var loses = 0;
  var winLossRatio = wins / (wins + loses);

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
    return ++wrongAnswers;
  } else {
    alert('Good, you got it! ' + a + ' and ' + b + ' equal ' + userAnswer);
    console.log('The user wrote: ' + userAnswer);
    return ++rightAnswers;
  }
//end of playAddRound function
};

// playAddRound();
// playAddRound();
// playAddRound();



//this round is supposed to take in
// function playKidsGame(){
//
// };



//END OF PLAY ROUND FUNCTIONS

/****************************
*******TIMER SETTINGS********
****************************/
