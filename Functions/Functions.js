function sum(a,b) {

var c = a +b;
return c;

}

var result = sum(1,2);
console.log(result);

// 1.	Write a program that calculates the maximum of two given numbers. 

function max(a,b) {

if (a>b) {
  console.log(a);
}
else if (b>a) {
  console.log(b);
}
else {
  console.log('There are equal.');
}
}

max(6,6);

// 2.	Write a program that checks if a given number is odd.

function odd(n) {

if (!n %2 === 0) {
console.log('Number is odd');
}
}
odd(3)

// 3.	Write a program that checks if a given number is a three digit long number.

function num(k) {

if (k>99 && k<1000) {
  console.log('Number is three digit long');
}
else {
  console.log('Number is not three digit long');
}
}
num(999);

// 4.	Write a program that calculates an arithmetic mean of four numbers.

function mean(g,h,j,k) {
var numAvg=(g+h+j+k)/4;
return (numAvg);
}

var g=7;
var h=6;
var j=7;
var k=8;
av=mean(g,h,j,k);
console.log('Average number is'+' '+av);

// Second way

var prosek=[10,6,8,9]
var sum = 0;
for(var i = 0; i < prosek.length; i++) {
    sum += prosek[i];
}
var avg = sum / prosek.length;
console.log(avg);

// 6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

