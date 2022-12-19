// 1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

var arr = ["1", "21", undefined, "42", "1e+3", Infinity]
function convertToNumber(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && (isFinite(arr[i]))) {
      newArr[i]=arr[i]
    }
  }
  return newArr;
}
var k = convertToNumber(arr)
console.log(k);

