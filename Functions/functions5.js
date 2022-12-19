// 1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

var arr = [3, 500, 12, 149, 53, 414, 1, 19];
var min = arr[0];
var max = arr[0];
var minIndex = 0;
var maxIndex = 0;
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}
arr[minIndex] = max;
arr[maxIndex] = min;
console.log(arr);

// 2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

var arr = [3, 500, -10, 149, 53, 414, 1, 19];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    newArr.push(20);
  } else {
    newArr[i] = arr[i]/2+5
  }
}
console.log(newArr);

// 3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.



var names = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ] ;
var points = [ 50, 39, 63, 72, 99, 51, 83, 59 ] ;
var grades = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < names.length; i++) {
  var grade = 'F';
  if (points[i] > 90) {
    grade = 'A';
  } else if (points[i] > 80) {
    grade = 'B';
  } else if (points[i] > 70) {
    grade = 'C';
  } else if (points[i] > 60) {
    grade = 'D';
  } else if (points[i] > 50) {
    grade = 'E';
  }
  console.log(names[i] + ': ' + grade);
}

// 4.	(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

var arr = [13, 11, 15, 5, 6, 1, 8, 12];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}
newArr.sort(function(a, b) {
  return a - b;
});
console.log(newArr);

// 6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000


var sum = 0;
for (var i = 1; i <= 1000; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
for (var i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    sum -= i;
  }
}
sum *= 12.5;
console.log(sum);


// 7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa

var arr = ['M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A'];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'string' && arr[i].length > 1) {


    // 8.	Write a program that takes a string and prints its characters out in reversed order in the console.
    // Input:  Belgrade Institute of Technology
    // Output: ygolonhceT fo etutitsnI edargleB


var str = 'Belgrade Institute of Technology';
var reversed = '';
for (var i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

// 9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

var count = 0;
for (var i = 1; i <= 7; i++) {
  for (var j = 1; j <= 7; j++) {
    if (i !== j) {
      console.log(i + ' ' + j);
      count++;
    }
  }
}
console.log(count);


// 10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
