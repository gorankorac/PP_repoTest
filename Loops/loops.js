// for (var x=0; x<=10; x++) {

// console.log(x*x);

// }

// 1.	Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// for (let i=0; i<=15; i++) {

//   if (i % 2 === 0) {
//   console.log(`The number ${i} is even.`);
  
// }
//   else {
//     console.log(`The number ${i} is odd.`);
    
//   }
// }

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

console.log(typeof(x.toString()));

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

// // 1.	Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// var a = [5, -4, 2, 3, 7];
// var e = 3;

// for (var i=0; i<a.length; i++) {

//  if (e === a[i]) {

//   console.log('Yes');

//  }
//   else {
//     console.log('Nope');
//   }
// }

// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var a = [-3, 11, 5, 3.4, -8];

 for (var i=0; i<a.length; i++) {

 if (a[i]>0) {

  console.log(a[i]*2);
  
}
}

// 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var b = [4, 2, 2, -1, 6];

// for (var i=0; i<a.length; i++) 

 console.log(Math.min(...b));
  
