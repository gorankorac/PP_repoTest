// Write a functional expression that duplicates each element of a given array.
// Input: []
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var arr = [2, 4, 7, 11, -2, 1]

var b = arr.map(item => [item, item]).flat();

console.log(b);

// 2.	Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

var t = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function remDuplicates(data) {

  let unique = data.reduce(function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a
  }, []);

  return unique;
}
console.log(remDuplicates(t));

// a.	Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

var y = [1, 2, 9, 1] 

var odds=[];
y.forEach((num) => { 
  if ( num % 2 === 1) {
    odds.push(num);
  }
});
console.log(!!odds);

// b.	Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var arr = [-1, 8.1, 3, 6, 2.3, 44, 2.11]
var newVal = arr.reduce(function(acc, el, i, arr) {
var middle = Math.floor(arr.length/2);
// console.log(middle);
if (arr[middle]>el) { 
  acc++
}
return acc;
}, 0)
console.log(newVal);

// 4.	Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

var arr = [1, 4, -2, 11, 8, 1, -2, 3]
var newVal = arr.reduce(
  function (obj, el, index, arr) {
    var temp = obj.minVale;
    console.log(temp);
    if (temp > el) {
      temp = el;
    }
    obj.minVale = temp;
    obj.lastIndex = arr.lastIndexOf(temp);
    return obj;
  },
  { minVale: 0 }
);
console.log(newVal, "NEW VALUE");

// a.	Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]

var arr = [2, 3, 8, -2, 11, 4];
var newVal = arr.filter(function (el) {
  return el < 6;
});
console.log(newVal);

// b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

var arr = ["JavaScript", "Programming", "fun", "product"];
var newVal = arr.filter((el) => el.toLocaleLowerCase().includes("pro"));
console.log(newVal);

// a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// b.	Write a function that calculates the total price of your shopping list. 
// c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

var Product = function (name, price) {
  this.name = name;
  this.price = price;
};
var arr = [
  new Product("apples", 100),
  new Product("milk", 80),
  new Product("bananas", 150),
];
console.log(arr);
// b
var x = arr.reduce((acc, el) => {
  acc += el.price;
  return acc;
}, 0);
console.log(x);

// c

function avgNesto(arr) {
  var avg = 0;
  arr.forEach((el) => {
    avg += el.price;
  });
  return avg / arr.length;
}
var avg2 = avgNesto(arr);




