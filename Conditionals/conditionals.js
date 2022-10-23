/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -*/

// var x=3;
// var y=-7;
// var z=2;
// if (x>0 && y>0 && z>0)
// {
//        alert("The sign is +");
// }
// else if (x<0 && y<0 && z<0)
//         {
//           console.log("The sign is -");
//         }
// else if (x>0 && y<0 && z<0)
//         {
//           console.log("The sign is +");
//         }
// else if (x<0 && y>0 && z<0)
//         {
//           console.log("The sign is +");
//         }
// else
//         {
//           console.log("The sign is -");
//         }

        /*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0*/

// let a = -5;
// let b = -2;
// let c = -6;
// let d = 0;
// let e = -1;

// if (a>b && a>c && a>d && a>e) {
//   console.log(a);
// }
// else if (b>a && b>c && b>d && b>e) {
//   console.log(b);
// }
// else if (c>a && c>b && c>d && c>e) {
//   console.log(c);
// }
// else if (d>a && d>b && d>c && d>e) {
// console.log(d);
// }
// else if (e>a && e>b && e>c && e>d ) {
// console.log(e);
// }

// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

// let x = 0;
// let y = -1;
// let z = 4;

// if (x>y>z) {
//   console.log(x,y,z);
// }
// else if (y>x>z) {
//   console.log(y,x,z);
// }
// else if (z>x>y) {
//   console.log(z,x,y);
// }

// Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
// divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10 Sample input: 7
// Output: 10 / 2 = 5 Output: X

// let x = 10;
// let y = 7;

// if (x%2===0) {
//   console.log('10/2=5');
// }
// else {
//   console.log(b);
// };

// Task 5. Write a program that compares two numbers and displays the larger. Display the result in
// the console.

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F

// let c = 60;
// let f = (9*c/5) + 32;


// console.log(c + '&#176' + 'C' + ' ' + 'is 140' + '&#176' + 'F');

// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48

// let a = 12;
// let b = 5;

// if (a==b) {
//   console.log((a+b)*3);
// }
// else {
//   console.log(a+b);
// }

// let a = 8;
// let b = 8;

// if (a==b) {
//   console.log((a+b)*3);
// }
// else {
//   console.log(a+b);
// }

// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

// let a = 5;
// let b = 54;

// if (a+b==50) {
//   console.log('true');
// }
// else if (a == 50 || b == 50) {
//   console.log('true');
// }
// else {
//   console.log('false');
// }

// let a = 6;
// let b = 50;

// if (a+b==50) {
//   console.log('true');
// }
// else if (a == 50 || b == 50) {
//   console.log('true');
// }
// else {
//   console.log('false');
// }

// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400

let a = 13;
let b = 34;
let c = 256;

if (a<20) {
console.log('bettween 0 and 20');
}
else {
  console.log('-');
}
    
    
if (20 <= b <= 100) {
  console.log('between 20 and 100');
}
else {
  console.log('-');
}

if (100 <= c <= 400) {
  console.log('between 100 and 400');
}
else {
  console.log('-');
}