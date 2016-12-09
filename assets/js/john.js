'use strict';
console.log('the john.js script has loaded.');
/********************************
***UNIVERSAL VARIABLE DECLATION**
********************************/
/* CONTENTS
--string search for these sections to jump to relevant code portion

*FORM INPUT AND LISTENER
*TIMER SETTINGS
*PLAYER/USER OBJECT
*PLAY ROUND SETTING

*/
var totalQuestions = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var globalMathAnswer = 0;
var globalUserGuess = 0;
var globalFirstNumber = 0;
var globalSecondNumber = 0;

//Player generator station.
var name = '';
var difficulty = 'easy';
var speed = 'easy';
var newPlayer;

/********************************
****FORM INPUT AND LISTENER******
********************************/


// If there is stuff in local storage then this function will
// put name of the user back into the form where they put their
// username. This will persist over page refreshes. This meets the
// requirement of using a persist something or other(I forget the technical term).
function init(){
  var grabData = localStorage.getItem('localData');
  newPlayer = JSON.parse(grabData);

  if (grabData){
    document.getElementById('userName').value = newPlayer.name;
  }
}
init();



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
//MDN setTimeout doc: https://goo.gl/6cjaXz
//MDN setInterval doc; I used setTimeout for a reason
// as it will wait, then run: https://goo.gl/Ixj4Es
  var intervalID = window.setTimeout(playAddRound, gameClock());
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

     default:
      alert('function gameClock() broke.');
      console.log('the gameClock and length failed to execute properly.');
    // end of switch statement. Remember, it measures in milliseconds
    }

    return timeSpan;

  // end of function
  };

  //play only 10 rounds of the game
  for(var i = 0; i < 9; i++) {
    mathRandomOperation();
    ++totalQuestions;
  };

  function renderResults(){
    var elDiv = document.getElementById('results')
// Display user name
    var definition = document.createElement('dl');
    elDiv.appendChild(definition);

    var definition2 = document.createElement('dt');
    definition2.textContent = 'name';
    definition.appendChild(definition2);

    var definition3 = document.createElement('dd');
    definition3.textContent = newPlayer.name;
    definition.appendChild(definition3);


// Display difficulty level
    var dLevel2 = document.createElement('dt');
    dLevel2.textContent = 'difficulty';
    definition.appendChild(dLevel2);

    var dLevel3 = document.createElement('dd');
    dLevel3.textContent = newPlayer.difficulty;
    definition.appendChild(dLevel3);

// Display speed level
    var sLevel = document.createElement('dt');
    sLevel.textContent = 'speed';
    definition.appendChild(sLevel);

    var sLevel1 = document.createElement('dd');
    sLevel1.textContent = newPlayer.speed;
    definition.appendChild(sLevel1);

// Display rightAnswers
    var rAnswer = document.createElement('dt');
    rAnswer.textContent = 'ranswers';
    definition.appendChild(rAnswer);

    var rAnswer1 = document.createElement('dd');
    rAnswer1.textContent = rightAnswers;
    definition.appendChild(rAnswer1);

// Display wrongAnswers
    var wAnswer = document.createElement('dt');
    wAnswer.textContent = 'wanswers';
    definition.appendChild(wAnswer);

    var wAnswer1 = document.createElement('dd');
    wAnswer1.textContent = wrongAnswers;
    definition.appendChild(wAnswer1);


  }
  // This takes care of the local storage requirement.
  // This will store what the user put into the form(in the biggining
  // of the page game) into localStorage.
  renderResults();

  function saveData() {
    localStorage.setItem('localData', JSON.stringify(newPlayer) );
  }
  saveData();



};





// END OF clickHandler FUNCTION.



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

// this function should randomly decide between an addition operation or a subtraction.
function mathRandomOperation(){
   // Generate a random number between 1 - 4. We may reassign 3 and 4 later.
  var randomChoice = (Math.random() * ((4 - 1) + 1) + 1);

  if(randomChoice >= 3) {
    playSubRound();}
  else {
    playAddRound();
  }

//end of mathRandomOperation function
};

function playerMathDifficulty() {
  var difficultyChoice = newPlayer.difficulty;
  var msg = 'The playerMathDifficulty failed to execute properly and is using easyNumbers() as a result.';
  var digits;

  switch (difficultyChoice) {
    case 'hard':
      digits = hardNumbers();
      break;

    case 'medium':
      digits = mediumNumbers();
      break;

    case 'easy':
      digits = easyNumbers();
      break;

    default:
      digits = easyNumbers();
      console.log(msg);
//end of switch/case statement.
  }

  return digits;

};

// this will play one simple round, using only addition.
function playAddRound() {
  var a = playerMathDifficulty();
  globalFirstNumber = a;
  var b = playerMathDifficulty();
  globalSecondNumber = b;
  var trueAnswer = a + b;
  globalMathAnswer = trueAnswer;

  var msg = 'Welcome to the KidsMathGame! Solve the correct question and you can advance to the next round!';
  var userAnswer = prompt(msg + '\n\nWhat do ' + a + ' + ' + b + ' equal when you add them together?', '0');
  globalUserGuess = userAnswer;
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

//this function will generate a subtraction math operation.
function playSubRound() {
  var a = playerMathDifficulty();
  globalFirstNumber = a;
  var b = playerMathDifficulty();
  globalSecondNumber = b;
  var trueAnswer = a - b;
  globalMathAnswer = trueAnswer;
  var msg = 'Welcome to the KidsMathGame! Solve the correct question and you can advance to the next round!';
  var userAnswer = prompt(msg + '\n\nWhat do ' + a + ' - ' + b + ' equal when you subtract them?', '0');
  globalUserGuess = userAnswer;
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


// END OF PLAY ROUND FUNCTIONS
// END PROGRAM.
