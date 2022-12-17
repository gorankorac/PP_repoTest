var result = true;

function subtract(first, second) {
   return first - second;
}

result = subtract(12, -10);
console.log(result); // 22
result = subtract(22, 2); // nema var, ali ima u globalu tako da je to ok

console.log(result); // 20

'use strict';

myVar = "random"; 

function addOne(num) {
   return num + 1;
}

var result = addOne(4);
console.log(result); // myVar is not defined

// Example 2

var global = 123;

var resetGlobal = function () {
   global = -1; // nema deklaraciju to je ista promenljiva iz globala, da ima var bila bi nova promenljiva
};

console.log(global); // 123 // F-ja nije pozvana

// Example 3

var global = 123;

var resetGlobal = function () {
   global = -1;
};

resetGlobal;

console.log(global); // 123


// Example 4

var global = 123;

var resetGlobal = function () {
   global = arguments[0] || -1;
};

resetGlobal(10);

console.log(global);// 10

resetGlobal(0); // 0 je false vrednost.
console.log(global);// -1

// Example 5

'use strict';

var result = square(10);// square is not defined, treba function (10) radi se o func. expression
console.log(result);

function square(num) {
   num *= num;
}
// kada selektujemo ceo kod i ranujemo dobijamo undefined, nema return

// Example 6

'use strict';

var result = square(10);
console.log(result); // 100 function declaration onda ide hoisting, pa console.log

function square(num) {
  return num *= num;
}

// Example 7
// var result = 10;
function toString(num) {
  result = num + '';
  return result;
}
var a=toString(10);
console.log(a);// dodao da isprobam
console.log(result); // result is not defined, pozvali smo promenljivu koja ne vazi izvan f--je, trebalo je da pozovemo f-ju

// Example 8

function toString(num) {
  'use strict';
     result = num + '';
     return result;
  }
  
  toString(num); // error num is not defined
  console.log(result); // result is not defined

  // Example 9

var output = toString(0.15);
console.log(output); // kada selektujemo gornju i ovu liniju dobijemo object undefined

var toString = function (num) {
   var result = num + '';
   return result;
}
// toString is not a function ne vazi hoisting. 

// Example 10

var toString = function (num) {
  var result = num + '';
  return result;
}

var output = toString(0.15);
console.log(output); // 0.15


// Example 11

var toString = function (num) {
  num = num || '';
  var result = num + '';
  return result;
}

var output = toString;
console.log(output);// function tostring , nismo pozvali f-ju


// Example 12

// 'use strict';

var global = parseInt("1e2");

incrementGlobal = function () {
   global++;
};

incrementGlobal();

console.log(global); // 2
console.log(typeof global); // nember


// Example 13

function sum(num1, num2) {
  num1 = num1 || 0;
  num2 = num2 || 0;

  if (!num1 && !num2) {
      return -1;
  }

  return num1 + num2;
}

var sumNumbers = sum;
var result = sumNumbers();

console.log(result);

function sum(num1, num2) {
  console.log(num1, num2);
  num1 = num1 || 0;
  num2 = num2 || 0;
  console.log(num1, num2);
  if (!num1 && !num2) {
    return -1;
  }
  return num1 + num2;
}
var sumNumbers = sum;
var result = sumNumbers();
console.log(result);
console.log(false || "" || NaN || false || "CAO" || undefined);
console.log(true && "x" && NaN && false && "CAO" && undefined);

// Example 14

var x = 21;
var girl = function () {
  console.log(x);
   var x = 20;   
};
girl(); // Undefined, 

// Example 15

function test() {
  var a;
  function foo() {
             return 2;
         }
         console.log(a); // undefined
         console.log(foo()); // 2
  
         var a = 1;
         
     }
  
     test();
  










