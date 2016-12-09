'use strict';

var numberImages = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
  '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
var imageJSON = localStorage.getItem('images');
var images = JSON.parse(imageJSON);
var currentImageIndices = [0, 0];
var totalClicks = 0; //tracks # of clicks

if (!images) {
  for (var i = 0; i < imagePaths.length; i++) {
    var path = numberImages[i];
    var numberName = path.split('.')[0];
    new ImageTrack(numberName, path);
  }
}

var imageList = document.getElementById('images');

imageList.addEventListener('click', clickHandler);

drawImage(0);
drawImage(1);

function clickHandler(event) {
  console.log(event.target);
}
if (totalClicks >= 10) {  //sets # of clicks before end of test
  // instert John's Code here? Or something?
}

var matchPath = event.target.getAttribute('src');
var arrayOfRandomNumbers = randomNumber();

totalClicks += 1;

//use event target to determine which image was clicked
//add to views of all images displayed
//add to clicks of just the clicked image
for (var j = 0; j < images.length; j++) {
  var currentImageObject = images[j];
  if (currentImageObject.path === matchPath) {
    currentImageObject.clicks += 1;
  };
}

imageList.textContent = '';

drawImage(arrayOfRandomNumbers[0]);
drawImage(arrayOfRandomNumbers[1]);

function voteCounter() {
  var votes = [];
  for (i = 0; i < images.length; i++) {
    votes.push(images[i].clicks);
  }
  return votes;
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * images.length);
}
// //Setting up the 2 images
function randomNumber(){
  var numbers = [];
  var uniqueNumber = [];
  var displayNumber = [0,0];
  var firstRandomNumber = randomNumberGenerator();
  var secondRandomNumber = randomNumberGenerator();
  while (currentImageIndices.indexOf(firstRandomNumber) !== -1) {
    firstRandomNumber = randomNumberGenerator();
  }
  while (firstRandomNumber === secondRandomNumber
      || currentImageIndices.indexOf(secondRandomNumer) !== -1) {
    secondRandomNumber = randomNumberGenerator();
  }

  return[firstRandomNumber, secondRandomNumer];

  return numbers;
}
randomNumber();

//sets up images as list items & displays them
function drawImage(index) {
  var img = document.createElement('img');
  var li = document.createElement('li');
  var imageList = document.getElementById('images');
  var imagePath = images[index].path;
  images[index].views++;

  //set src
  img.setAttribute('src', imagePath);
  //add to dom
  li.appendChild(img);
  imageList.appendChild(li);
}

function ImageTrack(name, path) {
  this.name = name;
  this.path = 'imgs/' + path;
  this.views = 0;
  this.clicks = 0;

  images.push(this);
}

//"Show Chart" Button Script
var chartButton = document.getElementById('show_chart');
chartButton.addEventListener('click', chartClickHandler);

for (var l = 0; l < voteCounter.length; l++) {
  var chartClicksArray = voteCounter[l];
  console.log(chartClicksArray);
}

function chartClickHandler() {
  var storedImages = JSON.stringify(images);
  localStorage.setItem('images', storedImages);
  drawChart();
  drawChartViews();
  chartButton.disabled = true;
}
