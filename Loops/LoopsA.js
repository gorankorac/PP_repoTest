for (var x=0; x<=10; x++) {

console.log(x*x);

}

// 1.	Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (let i=0; i<=15; i++) {

if (i % 2 === 0) {
console.log(`The number ${i} is even.`);
  
        }
          else {
                console.log(`The number ${i} is odd.`);
    
           }
          }

// 2.	Write a program to sum the multiples of 3 and 5 under 1000.

let sum = 0;
for (let i=0; i<1000; i++) {

if (i % 3 === 0 || i % 5 === 0) {
  sum += i;
   }

   }
    console.log(sum);

// 3.	Write a program to compute the sum and product of an array of integers.
var array = [1, 2, 3, 4, 5],
    s = 0,
    p = 1,
    i;
    for (i = 0; i < array.length; i += 1) 
    {
    s += array[i];
    p *= array[i];
     }
      console.log('Sum : '+ s + ' Product :  ' + p);

// 4.	Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

console.log(x.toString());

// 5.	Write a program that prints the elements of the following array.

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
 
for (var i in a) 
 {
console.log("row " + i);
 for (var j in a[i]) 
  {
  console.log(" " + a[i][j]);
   }
 }

 var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
 
 sum = 0;

 for (var i=0; i<=c.length; i++) {

  sum += i*i
  
 }
console.log(sum);
// 8.	Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

let m = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
result = 0;
for (i = 0; i < 51 ; i++) {

if (m[i] % 3 == 0 && m[i] % 5 == 0) {
  console.log('FizzBuzz')
}
else if (m[i] % 5 === 0) {
  console.log('Buzz');
} 
else if (m[i] % 3 == 0) {
  console.log('Fizz');
}
else {
  console.log(m[i]);
}
}

