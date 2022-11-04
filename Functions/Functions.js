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

if (n %2 !== 0) {
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

var prosek=[10,6,8,9];
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

var result = '';
for (var i=0; i<3;i++) {

for (var j=0; j<6;j++) {
  if (i===1 && j===3){
    result +='\n';
  } else if (i===2 && j===5) {
    result +='\n';
  } else if (i===0 && j===5)
    result +='\n';
  else {
    result +='*'
  }
  
}
 if (i>3) result += '\n';
}
console.log(result);

// 7.	Write a program that calculates a number of digits of a given number. 

function countDigit(n)
{
    let count = 0;
    while (n != 0)
    {
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}
console.log('Number of digits:' + ' ' + countDigit(123));

// 8.	Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;


var mf = 1;
var m = 0;
var item;
for (var i=0; i<a.length; i++)
{
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = a[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

// 9.	Write a program that calculates the sum of odd elements of a given array. 





