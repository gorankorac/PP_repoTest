// Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

function f(a) {
  var temp = a[0];
  a[0] = a[a.length-1];
  a[a.length-1] = temp;
  return a
}

var z = f([4, 5, 11, 9]);
console.log(z)

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

function repl(g, p) { 

var p = 0;
var k = '*'
for ( i=0; i<g.length; i++) { 
if (g === 'M' || g === 'm') {

   k='*';
 
}
p+='*'
}
return p;
}
var g = 'prograMming';
console.log(repl(g, p));


function filter(a, cb) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    var element = a[i];
    var isConditionTrue = cb(element);
    if (isConditionTrue) {
      b[b.length] = a[i];
    }
  }

  return b;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var resEven = filter(arr, function (e) {
  return e % 2 === 0;
});
console.log(resEven);