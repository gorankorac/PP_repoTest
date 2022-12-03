// Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

function f(a) {

var temp=a[0];
a[0]=a[a.length-1];
a[a.length-1]=temp;

return a;

}

var b = f([4, 5, 11, 9]);

console.log(b);

// Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20


var rec = (function(a,b){
  return a * b;
})(4, 5);

console.log(rec);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2
(function f(a) { 
var a = 'prograMming';
var b = '';
for (i=0; i<a.length; i++) {

var c = a[i] === "m" || a[i] === "M" ? "*" : a[i];
    b += c;
    }
    console.log(b);
    return b;
  })("prograMming");

// var a = 'prograMming';
// var b = '';
// for (i=0; i<a.length; i++) {

// if (a[i]==='M' || a[i]==='m') {

//   a[i]='*';

// }
// console.log(a[i]);
// }
// console.log(a[i]);



