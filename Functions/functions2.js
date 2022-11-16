// 1.	Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function str(a) {

if (typeof a === 'string') {

  console.log('Yes');

} else 

console.log('No');

 return a;
}
var a = typeof 'kikiriki';
console.log(str(a));

// 3.	Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function ins(a,b) {

var c='';
for (var i=0; i<b; i++) {

c += a;

}
return c;
}
var a = 'Ha';
var b = 5;
console.log(ins(a,b));

// 4.	Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function lett(a,b) {

var c=0;
  
for (var i=0; i<a.length; i++) {

if (a[i]==b)  c++

}
return c;
}
var a = 'to je to';
var b = 't';
console.log(lett(a,b));

// 5.	Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1

function f(a,b) {

var c = -1;

for (var i = 0; i < a.length; i++) { 

if (b === a[i]) { 
c=i
break;
}
}
return c;
 }

var a = 'savrseno';
var b = 'k';
console.log(f(a,b));

// 6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function f(a,b) {

  var c = -1;
  
  for (var i = a.length; i >= 0; i--) { 
  
  if (b === a[i]) { 
  c=i
  break;
  }
  }
  return c;
   }
  
  var a = 'savrsanaoa';
  var b = 'a';
  console.log(f(a,b));

//   7.	Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function convert(inputString){
  var stringLength= inputString.length;
  var arr = [];
  for (var i = 0; i < inputString.length; i++){
      var replace = inputString[i] === " " ? null : inputString[i];
      arr[arr.length] = replace;
      }
      return arr
  }
console.log(convert("My random string"));

// 9.	 Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

function rep(string, symbol) {
  var length = string.length;
  var newString = "";
  for (var i = 0; i < length; i++) {
    var el = string[i] === " " ? symbol : string[i];
    newString += el;
  }
  return newString;
}
var x = rep("My Random String", "+");
var a = rep("My Random String", "-");
console.log(x);
console.log(a);

// 11.	 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function f(a) {

var b = [];
for (var i=0; i<a.length; i++) {

  if (isFinite(a)) {
    b += a[i]


} 
} 
return b
}
var a = [1,21,undefined, '42', '1e+3', Infinity]
console.log(f(a));

function convertToNumArray(arr) {
  var arr2 = [];
 for (var i = 0; i < arr.length; i++) {
      var e = parseFloat(arr[i]);
      if (isFinite(e)) {
          arr2[arr2.length] = e
      }
  } 
  return arr2
}

var f = convertToNumArray(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(f);




