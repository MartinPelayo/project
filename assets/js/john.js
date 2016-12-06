'use strict'



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

// easy
function easyNumbers() {
 return Math.floor(Math.random() * ((10-5)+1) + 1);
};

//medium
function mediumNumbers() {
 return Math.floor(Math.random() * ((100-10)+1) + 10);
};

//medium
function hardNumbers() {
 return Math.floor(Math.random() * ((999-100)+1) + 100);
};

//END OF NUMBER GENERATION SETTINGS
