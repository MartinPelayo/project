'use strict';

var numberImages = ['num-0.jpg', 'num-1.jpg', 'num-2.jpg', 'num-3.jpg', 'num-4.jpg', 'num-5.jpg', 'num-6.jpg', 'num-7.jpg', 'num-8.jpg', 'num-9.jpg'];

var imageJSON = localStorage.getItem('images');
var images = JSON.parse(imageJSON);
var currentImageIndices = [0, 0];
var totalClicks = 0; //tracks # of clicks

var imageList = document.getElementById('images');

imageList.addEventListener('click', clickHandler);

drawImage(0);
drawImage(1);

function clickHandler(event) {
  console.log(event.target);
}
