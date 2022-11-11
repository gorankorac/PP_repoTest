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
numb(999);

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
function draw(k,l,o) {


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
function pon(a, e){



var result = 0;
for (var i=0; i<a.length; i++)
if (a[i] === e) {
  result++;
}
return result
}
var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
console.log(pon(a, e));
// 9.	Write a program that calculates the sum of odd elements of a given array. 

function oddf(arr, n) {

  var sum=0;
  for (var i=0; i<n ; i++)
  if (arr[i] % 2 !== 0) {
     sum += arr[i]
  }
  console.log('Odd sum is' + ' ' + sum);
  }
  var arr=[1,2,3,4,5,6,7,8,9];
  var n=arr.length;
  oddf(arr, n);

  // 11.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc

function con(x, y) {

  result = '';
  for (var i=0; i<y; i++) result+=x;
  return result; 

}

console.log(con('d', 5));

// 1.	Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function check(n){

  var c = typeof n=== 'string' ? 'Yes' : 'No';
   return c;
 }

 console.log(check('goran'));

//  2.	Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function blank(g){

result='';
if (result.length>0) {
  console.log('False');
}
else{
  console.log('True');
}
return result;
}
console.log(blank(''));

// 3.	Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function con(x, y) {

  result = '';
  for (var i=0; i<y; i++) result+=x;
  return result; 

}

console.log(con('d', 1));

// 4.	Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function pon(a, e){

  var result = 0;
  for (var i=0; i<a.length; i++)
  if (e === a[i]) {
    result++;
  }
  return result
  }
  var a = 'My first step of programming';
  var e = 'i';
  console.log(pon(a, e));

  // 5.	Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1

  function letter(r,t) {
var result = -1;
for (var i=0; i<r.length; i++)
if (t===r[i]) {
  result=i;
  break;
}
return result;

  }
  var r='Petar';
  var t='l';
  console.log(letter(r,t));

  // 6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

  function letter(r,t) {
    var result = -1;
    for (var i=0; i<r.length; i++)
    if (t===r[i]) {
      result=i;
    
    }
    return result;
    
      }
      var r='Petae';
      var t='e';
      console.log(letter(r,t));

 
