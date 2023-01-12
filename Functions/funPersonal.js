for ( p=- 5 ; p<= 5 ; p= p+ 1 )
{
if ( p== 0 ) { continue };
console.log(( 10 / p)+ "<br>");
}

function removeFalsy (arr) {
  var a = '';
  for (i = 0; i < arr.length; i++) {
      if (!!arr[i]) {
 
          a += arr[i];
      }
  }
  return a
 }
 
 var f = removeFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]);
 console.log (f);

// Numbers part

 var a;
 console.log(a);
 console.log(typeof(a));

 var s = '1s';
 s++
 console.log(s);

 var n3 = 0377;
 console.log(n3); // 255
 console.log(typeof(n3)); // number

//  +=  zbraja dvije varijable (x = x + y;)

console.log('1s'+1);

a = 3e+3; 
a++;
console.log(a);

function removeFalsy (arr) {
  var a = [];
  for (i = 0; i < arr.length; i++) {
      if (arr[i]) {
 
          a[a.length] = arr[i];
      }
  }
  return a
 }
 
 var f = removeFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]);
 console.log (f);

 var res = '\n';
   for (var i = 0; i < 5; i++) {
       for (var j = 0; j < 5; j++) {
           res += '*\t';
       }
       res += '\n';
   }
   console.log(res);
   // Resenje 
// *	*	*	*	*	
// * * *	*	*	
// *	*	*	*	*	
// *	*	*	*	*	
// *	*	*	*	*	

// 4.	Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

var s = 12345;
var n = "";
for (i=0; i<s.length; i++) {

  n+=s
}
console.log(n);

function rev(n) {
  let r = ''
  for (i = n.length - 1; i >= 0; i--)
    r += n[i]
  return r
}

console.log(rev('123456'))


function mean(a) {
  var sum=0;

for (var i=0; i<a.length; i++) {

  sum+=a[i]

}
return (sum/4);
}
var a = [1,2,3,4];
// var avg=sum/a.length
console.log(mean(a));

// 8.	Write a program that calculates a number of digits of a given number. 

function num(s) {

var d=0;
for (var i=0; i<s.length; ++i) {

  ++d;

}

return d;

}
var s='123456';
console.log(num(s));

let vn = 10;
for (let i=2; i<=vn; i++) {

let count = 0;
console.log(`i = ${i}`);

for (let j=2; j<=i; j++) {

console.log(`j = ${j}`);

if (i % j == 0) ++count;

console.log(`count = ${count}`);

if (count > 1) break;

}
if (count == 1) console.log(i);
 }

 // YouTube Nested Loops

 for (let i = 0; i < 5; i++) { 
 console.log(`The current value of i is: ${i}`);

 for (let j = 0; j < 5; j++) {

console.log(`j: ${j}`);

 }
 console.log("---------------------------");
}

for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
     console.log(`${i} * ${j} = ${i*j}`);
 }
 console.log('---------------------');
  }

  // 9.	Write a program that calculates a number of appearances of a given number in a given array.
  // Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
  // Result: 3

  var a = [2,4,7,8,7,7,1]
  var e = 7;
  var f = 0;
  for (i=0; i<a.length; i++) {

    if (e === a[i]) {

      f++
    } 
    
   }  
   console.log(f);

  //  12.	Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function con(a,b) { 
  
  var n = '';
  for (i=0; i<b; i++) {

   n+=a;

  }
  return n
}

  console.log(con('jigle', 5));



  var scope = "global";

  function checkScope() {
     // Declare a local variable with the same name
     var scope = "local";
  
     // Return the local value, not the global one
     return scope;
  }
  var result = checkScope() // => "local"
  
  console.log(scope); 
  console.log(result);


  var global = 123;

function myFunc() {
   console.log(global);
   var global = 1;
   console.log(global);
}

myFunc();

var res = '\n';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        res += '*\t';
    }
    res += '\n';
}
console.log(res);

function args() {

  return arguments;

}
args();

args(1, 2, 3, 4, true, 'ninja');

console.log(2 + true);

  for (var i=0; i<5;) { 
    console.log('*')

  }

  console.log(++10);

  function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
 }

 function printMultiplicationTable(a) {
  var table = "";
  for (var i = 1; i <= 12; i++) {
      table += a + " * " +i + " = " + a *i + "\n";
  }
  return table;
}
var a4 = printMultiplicationTable(2);
console.log(a4);
 
var f = function () {
  return 1;
};

f(4);
console.log(f(4));

// Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]


function f(a) { 
var b = [];

for (var i = 0; i < a.length; i++) {
 if (a[i] === a[a.length-1]) {

  a[i]=a[0]

 } else {


 }
  b[i] = a[i]

  }
 return b;
}

var a = [4, 5, 11, 9];
console.log(a);

function f(a) { 
  var b = [];
  var c = a[0]
  for (var i = 0; i < a.length; i++) {
   if ( a[i] === a[a.length-1] ) {
    c = a[0] 
   } else if (a[i] === a[0]) {

    c = a[a.length-1]

   }
    b[b.length] = c


    }
   return b;
  }
  
  var m = f([4, 5, 11, 9]);
  console.log(m);


  for (var i=0; i<a.length; i++) {
    if (a[i] = a.length-1) {
         = a[i];
    }
}

function replaceFirstAndLast(array) {
  var newArray = [], temp = array[0];
  for (var i = 0; i < array.length; i++) {
      var element = array[i];
      if (element === array[array.length-1]) {
          element = array[0];
      } else if (element === array[0]) {
          element = array[array.length-1];
      }
      temp = element;
      newArray[newArray.length] = temp;
  }
  return newArray
}

var z = replaceFirstAndLast([4, 5, 11, 9]);
console.log(z)

function replaceFirstAndLast(array) {
  var temp = array[0];
  array[0] = array[array.length-1];
  array[array.length-1] = temp;
  return array
}

var z = replaceFirstAndLast([4, 5, 11, 9]);
console.log(z)

// F-je povratnog poziva

function outer(param) {
	
  function inner(theinput) {
      return theinput * 2; 
  }
 
  return 'The result is ' + inner(param);
}

 console.log(outer(2));

 function mult(a, b, c) {

  var i, ar = [];
  for (i=0; i<3; i++) {

    ar[i] = arguments[i]*2;
  }
  return ar;

 }
console.log(mult(1, 2, 3));

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

// 1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

function f(a) {

var temp = a[0];
a[0]=a[a.length-1];
a[a.length-1]=temp;

return a;

}

var b = f([4, 5, 11, 9]);
console.log(b);

a = [4, 5, 11, 9];
var temp=a[0];
console.log(temp);
a[0]=a[a.length-1]
a[a.length-1]=temp
console.log(a);



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

ar output = toString(0.15);
console.log(output); /// not function
var toString = function (num) {
  var result = num + "";
  return result;
};
var toString; // undefined
var output; // undefined
output = toString(0.15); //=>  undefined(0.15);
console.log(output); //greska
toString = function (num) {
  var result = num + "";
  return result;
};
white_check_mark
eyes
raised_hands





12:38
var toString = function (num) {
  var result = num + "";
  return result;
};
var output = toString(0.15);
console.log(output);
var toString;
var output;
toString = function (num) {
  var result = num + "";
  return result;
};
output =  toString(0.15);
console.log(output);



  
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
var result = sumNumbers(undefined, 5);
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
// console.log(false || "" || NaN || false || "CAO" || undefined);
console.log(true && "x" && NaN && false && "CAO" && undefined);


var hero = {
  name: 'Leonardo',
  kind: 'Turtle',
  occupation: 'Ninja',
  say: function (params) {
      return 'I am ' + hero.occupation;
  }
};

hero.say()
console.log(hero.say());
hero['say']();

//jajajajaj

var arrRef = ["Hi!"];
var arrRef2 = arrRef;
console.log(arrRef === arrRef2); 
console.log(arrRef2);

console.log([1]===[1]);

console.log(null===null);

console.log(false || "" || NaN || false || "CAO" || undefined);
console.log(true && "x" && NaN && false && "CAO" && undefined);


var a = false || "" || NaN || false || "CAO" || undefined;

//  

let a = [5,10,15];
let b = ['A', 'B', 'C'];

var newList = function(a,b)
{
  let l = a.length+b.length;
  let r = [];
  let j=0,k=0;
  for(let i=0; i<l;i++) {
    if(i%2==0) {
      r[i]=a[j++];
    } else {
      r[i]=b[k++];
    }
  }
  return r;
}

console.log(newList(a,b));



function len(a,b) {

var h=[];

for(var i=0; i<a.length; i++) {

  h[h.length]=a[i]
  h[h.length]=b[i]
}
return h
}

var a = [5,10,15];
var b = ['A', 'B', 'C'];
var c = len([5,10,15], ['A', 'B', 'C']);

console.log(c);


var convertStringToArr = function (string) {
  var count = 0;
  var newArr = [];
  var testArr = [];
  newArr[0] = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " " || string[i] === ",") {
      count++;
      newArr[count] = "";
    } else {
      newArr[count] += string[i];
    }
  }
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] === "") continue;
    testArr[testArr.length] = newArr[i];
  }
  return testArr;
};
var genereteLine = function (input) {
  var line = "* ";
  for (var i = 0; i < input; i++) {
    line += "*";
  }
  line += " *\n";
  return line;
};
var printWords = function (string) {
  var input = typeof string === "string" ? convertStringToArr(string) : string;
  var letterLength = input.length - 1;
  var word = "* ";
  var line = genereteLine(input.length);
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      var el = typeof input[i][j] === "undefined" ? " " : input[i][j];
      word += el;
      if (j === letterLength) {
        word += " *\n";
        if (i === letterLength && j === letterLength) {
          word += "";
        } else {
          word += "* ";
        }
      }
    }
  }
  return line + word + line;
};
var x = printWords("Hello, World in a frame");
console.log(x);


var x= 0.1;
var y= 0.2;
var z = (x*10 + y*10)/10
console.log(z);
// petlja u petlji primer princip rada...
function occur(arr) {

  for(var i=0; i<arr.length; i++) {

    for(var j=0; j<arr.length; j++) {

      console.log(arr[i],arr[j]);

    }
    console.log('-----------------');
  }


} 
occur(['a', 'b', 'c'])


var a = [[1,2,1,24], [8,11,9,4], [7,0,7,27]];
for (var i in a) {
  console.log('row ' + i);
  for (var j in a[i]) {
    console.log(' ' + a[i][j]);
  }
}

// Write a functional expression that duplicates each element of a given array.
// Input: []
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var arr = [2, 4, 7, 11, -2, 1]

var b = arr.map(item => [item, item]).flat();

console.log(b);





function f(arr) {


var c = [];
 for (var i = 0; i<arr.length; i++) {

    for (var j=i+1; j<arr.length; j++) {

      if(arr[i]==arr[j]) {
        c[c.length]=arr[i]
        c[c.length]=arr[j]
      }

      // c[c.length]=arr[i]
      // c[c.length]=arr[j]
      
    }

 }
 return c
}

var arr = [2, 4, 7, 11, -2, 1]
var n = f(arr);
console.log(n);


function h(arr, m) { 
  var temp=[];
for (var i = 0; i<arr.length; i++) {

  for (var j=0; j<m.length; j++) {

        temp[temp.length]=arr[i]

     }
    }
    return temp;
  }

  var arr = [2, 4, 7, 11, -2, 1]
  var m = 2;
  var r = h(arr, m)
  console.log(r);

  var arr = [2, 4, 7, 11, -2, 1];
  for (var i = 0; i<arr.length; i++) {

    for (var j=0; j<2; j++) {
  
         console.log(arr[i]);
  
    }
      
  }

  var arr = [2, 4, 7, 11, -2, 1]
  for(i=0;i<arr.length;i++)
  {
      count=0;
      for(j=0;j<2;j++)
      {
          if( i!=j && (arr[i]>arr[j]) )
          {
              count++;
          }
      }
      // printf("%lld ",count);
      console.log(arr);
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      for (var k = 0; k < arr.length; k++) {
        console.log(
          arr[i],
          "PRVA PETLJA")
    //       arr[j],
    //       "DRUGA PETLJA",
    //       arr[k],
    //       "TRECA PETLJA"
    //     );
    //   }
    //   console.log("CEO KRUG ZA TRECU ");
    // }
    // console.log("CEO KRUG ZA DRUGU ");
  // }

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      for (var k = 0; k < arr.length; k++) {
        console.log(
          arr[i],
          "PRVA PETLJA",
          arr[j],
          "DRUGA PETLJA",
          arr[k],
          "TRECA PETLJA"
        );
      }
      console.log("CEO KRUG ZA TRECU ");
    }
    console.log("CEO KRUG ZA DRUGU ");
  }

  var arr = ["A", "B", "C"];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    for (var k = 0; k < arr.length; k++) {
      console.log(
        arr[i],
        "PRVA PETLJA",
        arr[j],
        "DRUGA PETLJA",
        arr[k],
        "TRECA PETLJA"
      );
    }
    console.log("CEO KRUG ZA TRECU ");
  }
  console.log("CEO KRUG ZA DRUGU ");
}

var arr = ["A", "B", "C"];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    for (var k = 0; k < arr.length; k++) {
      console.log(
        arr[i],"PRVA PETLJA", arr[j],
        "DRUGA PETLJA")
        

            }
          }
        }


        var arr = [2, 4, 7, 11, -2, 1];
        var a = arr.reduce(function (newArr, el, index, arr) {
          newArr[index] = (el + "," + el).split(",");
          return newArr;
        }, []);
        console.log(a);
        // var arr = [2, 4, 7, 11, -2, 1];
        // var newArr = [];
        // arr.forEach((el) => newArr.push(el, el));
        // console.log(newArr);      
        var arr = [2, 4, 7, 11, -2, 1];
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
          { minVale: 0, lastIndex: 0 }
        );
        console.log(newVal, "NEW VALUE");   
        
        var arr = [2, 3, 8, -2, 11, 4];
var newVal = arr.filter(function (el) {
  return el < 6;
});
console.log(newVal);

function sumAll (a, b, c) {

  return a + b + c;

}
var numbers = [6, 7, 8];
// console.log(sumAll.apply(null, numbers));

console.log(sumAll(numbers));

var global = 1;
function f() {

var local = 2;
global++;
return global;

}
f();

// Zadatak

function add(num) {
  num = num || 0;
  num++;
  return num;
}
var x = ["Stefan", "Goran", "Jovan", "Radasin", "Stefan", "Goran"];
var nesto = x.reduce(function (obj, el, index, arr) {
  obj[el] = add(obj[el]);
  return obj;
}, {});
console.log(nesto);

// { Stefan: 2, Goran: 2, Jovan: 1, Radasin: 1 }


var result = true;

function subtract(first, second) {
   return first - second;
}

result = subtract(12, -10);
console.log(result);

result = subtract(22, 2);

console.log(result);

'use strict';

myVar = "random";

function addOne(num) {
   return num + 1;
}

var result = addOne(4);
console.log(result);

'use strict';

var result = square(10);
console.log(result);

function square(num) {
   num *= num;
  return num;
  }

  function toString(num) {
    result = num + '';
    // return result;
 }
 
 toString(5);
 console.log(result);
 
 function toString(num) {
  'use strict';
    result = num + '';
 
     return result;
  }
  
  var result; 
  toString(25);
  console.log(result);

  var toString = function (num) {
    num = num || '';
    var result = num + '';
    return result;
 }
 
 var output = toString;
 console.log(output(25));

 var x = 21;
var girl = function () {
  console.log(x);
    x = 20;
    

};
girl();
console.log();

typeof console.log;

(function () {
   return console.log;
})()('Boo!')


var print = (function () {
  return console.log;
})();
print("This might work or not?");

var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"]

function transformArray(array, action) {
  var result = [];
  for (var index = 0; index < array.length; index++) {
      var element = array[index];
      result[index] = action(element);
  }
  return result;
}

var output = transformArray(input, parseFloat);
console.log(output);

var cubeVolume = function (a) {
  return a * a * a;
}

function cubeCalculation(a, calc) {
  return calc(a);
}

output = cubeCalculation(10, cubeVolume)
console.log(output);

function cubeCalculation(a, calc) {
  return calc(a);
}

var output = cubeCalculation(10, function (a) {
  6 * a * a;
})
console.log(output);

function saySomething(msg1) {
  return function (msg2) {
      var output = msg1 + " " + msg2;
      return function () {
          output += "!"
          console.log(output);
      }
  }
}

saySomething("Hi")("there")();

function f() {

fun(2, 5);
zbir(2, 5);

var fun = zbir;

function zbir(a, b) {

console.log(a + b);

}

fun(10, 15);
zbir(10, 15);

}

fun(1, 2);
zbir(1, 2);

function zbir() {

  var r = 0;
  for (var i = 0; i<arguments.length; i++) {

    r += arguments[i];

  }
return r;
}
 
zbir(5, 6, 10);
console.log(zbir(5, 6, 10));

var a = 20;

function f(n) {

var res =  a + n
a = 30
return res;

}


console.log(f(5));


(function() {
  console.log('sss');
}) ();

console.log(n);
var n=5;


var b = 45 % 10;
console.log(b);

var a = 10;
function f(a, b) {

  a++;
  b--;
  console.log(a, b);

}
f(a, 2);
console.log(a);
 
var a, b;
function calculate(a, b) {

  var rb = b % 10;
  var ra = a % 10;

  a = a - ra + rb;
  b = b - rb + ra;
 
  console.log(a, b);
} 

calculate (123, 45)

'use strict';

(function () {
  function Genre(n) {
    if (!n) {
      throw new Error('Property name is required');
    }
    this.name = n;
    this.getData = function () {
      var firstLetter = this.name[0];
      var lastLetter = this.name[this.name.length - 1];
      var result = firstLetter + lastLetter;
      return result.toUpperCase();
    };
  }

  function Movie(t, g, l) {
    if (!t || !g || !l) {
      throw new Error('Missing propertied!');
    }
    if (!(g instanceof Genre)) {
      throw new Error('Invalid genre input!');
    }
    this.title = t;
    this.genre = g;
    this.lengthOfMovie = l;
    this.getData = function () {
      return (
        this.title + ', ' + this.lengthOfMovie + 'min, ' + this.genre.getData()
      );
    };
  }

  function Program(d) {
    if (!d) {
      throw new Error('Property date is required');
    }
    this.date = new Date(d);
    this.movieList = [];
    this.getNumberOfMovies = function () {
      return this.movieList.length;
    };
    this.addMovie = function (m) {
      if (!(m instanceof Movie)) {
        throw new Error('Invalid movie input!');
      }
      this.movieList.push(m);
    };
    this.getTotalLength = function () {
      var total = 0;
      this.movieList.forEach(function (movie) {
        total += movie.lengthOfMovie;
      });
      return total;
    };
    this.getData = function () {
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      var result =
        day +
        '.' +
        month +
        '.' +
        year +
        ', program duration ' +
        this.getTotalLength() +
        'min';
      this.movieList.forEach(function (movie) {
        result += '\n\t\t' + movie.getData();
      });
      return result;
    };
  }

  function Festival(n) {
    if (!n) {
      throw new Error('Property name is required');
    }
    this.name = n;
    this.programList = [];
    this.getTotalNumberOfMovies = function () {
      var total = 0;
      this.programList.forEach(function (program) {
        total += program.getNumberOfMovies();
      });
      return total;
    };
    this.addProgram = function (p) {
      if (!(p instanceof Program)) {
        throw new Error('Invalid program input!');
      }
      this.programList.push(p);
    };
    this.getData = function () {
      var result =
        this.name +
        ' festival has ' +
        this.getTotalNumberOfMovies() +
        ' movie titles';
      this.programList.forEach(function (program) {
        result += '\n\t' + program.getData();
      });
      return result;
    };
  }

  function createMovie(t, l, g) {
    var genre = new Genre(g);
    var movie = new Movie(t, genre, l);
    return movie;
  }

  function createProgram(d) {
    return new Program(d);
  }

  //Testing
  try {
    var kustendorf = new Festival('Kustendorf');

    // var sundayProgram = createProgram('12/24/2022');
    // var mondayProgram = createProgram('12/25/2022');

    // var rushHours = createMovie('Rush Hour', 95, 'action');
    // var theRing = createMovie('The Ring', 103, 'horror');
    // var frida = createMovie('Frida', 87, 'drama');
    // var tropicThunder = createMovie('Tropic Thunder', 91, 'comedy');

    // sundayProgram.addMovie(rushHours);
    // sundayProgram.addMovie(theRing);
    // mondayProgram.addMovie(frida);
    // mondayProgram.addMovie(tropicThunder);

    // kustendorf.addProgram(sundayProgram);
    // kustendorf.addProgram(mondayProgram);

    console.log(kustendorf.getData());
  } catch (error) {
    console.log(error.message);
  }
})();

let result = (function() {

  let val = 'Laurence';
  return val;
  
})();
console.log(result);

function getRecursive(nr) {

  console.log(nr);
  if (nr > 0) {
    getRecursive(--nr);
  }
}
getRecursive(3);

function dr(nr) {

  console.log('Outer');
  function dr2(x) {
    console.log(x+7);
    console.log('can access ', nr);
  }
  dr2(nr);

}
dr(2);

function ds(nr) {

  ds2(nr);
  function ds2(x) {
    let z = 10;
    console.log('ne moze', z);
  }
}
ds(3);


function ds(nr) {

  ds2(nr);
  function ds2(x) {
    let z = 10;
    
  }
}
ds(3);


(function () {


  function Genre(n) {

    this.name = n;
    this.getData = function () {
      var first = this.name[0];
      var last = this.name[this.name.length - 1];
      var result = first + last;
      return result.toUpperCase();

    }  
  }
  
  function Movie(t, g, l) {

    this.title = t;
    this.genre = g;
    this.lengthMovie = l;
    this.getData = function () {

      return this.title + this.lengthMovie + this.genre.getData();

    } 
  }

  

  function Program(d) {

    this.date = new Date(d);
    this.movieList = [];
    this.getNumberOfMovies = function() {
      return this.movieList.length;
    }
    this.addMovie = function (m) {

        this.movieList.push(m);

    }

    this.getTotalLength = function () {
      var total = 0;
      this.movieList.forEach(function(movie) {

        total += movie.lengthMovie

      });
      return total;
    }
    this.getData = function () {
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      var result =
        day +
        '.' +
        month +
        '.' +
        year +
        ', program duration ' +
        this.getTotalLength() +
        'min';
      this.movieList.forEach(function (movie) {
        result += '\n\t\t' + movie.getData();
      });
      return result;
    };

  }

  function Festival(n) {

    this.name = n;
    this.programList = [];
    this.getTotalNumberOfMovies = function () {

        var total = 0;
        this.programList.forEach(function(program) {

          total += program.getNumberOfMovies();

        } )
        return total;
    }

    this.addProgram = function (p) {
      if (!(p instanceof Program)) {
        throw new Error ('Invalid program input');
      }
    this.programList.push(p);
    };
    this.getData = function () {

        var result = this.name + 'festival has' + this.getTotalNumberOfMovies() + 'movie titles';
        this.programList.forEach(function(program) {
          result += '\n\t\t' + program.getData();
        })
        return result;
    }
  }

})();




function MemberOfOnlineGroup4(n, m){
  this.name = n;
  this.memory = m;
};
var life = new MemberOfOnlineGroup4('Dario',['sorrow', 'happy']);
function happy_new_year_2023(your_life) {
  var i = 2022;
  while (i >= 0){
      if (your_life.memory[i] === ('sorrow'|| 'pain' || 'angry' || 'hate' || 'envy' || 'sadness' || 'hopeless')){
          delete your_life.memory[i]; //free memory :);
      } else {
          //keep memory fresh :);
      }
      i--;
  };
  var happiness = 'Everything what you think, what you say, and what you do are in harmony.';
  your_life.year2023 = [];
  var date = Math.floor(new Date().getTime()/1000/60/60/24);
  var date2023 = Math.floor(new Date('1 January 2024').getTime()/1000/60/60/24);
  for (var i = date; i < date2023 ; i++){
      your_life.year2023.push(happiness);
  }
  /* never come out of this loop*/
  return your_life;
}
var new_year_wishes_to_every_member_of_online_group4 = happy_new_year_2023(life);
console.log(new_year_wishes_to_every_member_of_online_group4);
 
function Product(name, price, expirationDate) {
  this.id = Math.floor(Math.random() * 90000) + 10000;
  this.name = name;
  this.price = price;
  this.expirationDate = expirationDate;
}
/* ●	ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters) */
function ShoppingBag() {
  this.products = [];
}
/* Add getInfo method to Product. It should return a formatted string containing product code (the first and last letter of the name together with the product id), name and price. */
Product.prototype.getInfo = function() {
  return this.name[0] + this.name[this.name.length - 1] + this.id + ', ' + this.name + ', ' + this.price;
}
/* "Banana" -> BA32784, Banana, 129.31 */
var banana = new Product('Banana', 129.31, new Date(2018, 10, 10));
console.log(banana.getInfo());
/* Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date. */
ShoppingBag.prototype.addProduct = function(product) {
  if (product.expirationDate > new Date()) {
    this.products.push(product);
  }
}
/* Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals. */
ShoppingBag.prototype.averageProductPrice = function() {
  var sum = 0;
  for (var i = 0; i < this.products.length; i++) {
    sum += this.products[i].price;
  }
  return (sum / this.products.length).toFixed(3);
}
/* Add getMostExpensive method that finds the most expensive product and prints out its info. */
ShoppingBag.prototype.getMostExpensive = function() {
  var mostExpensive = this.products[0];
  for (var i = 1; i < this.products.length; i++) {
    if (this.products[i].price > mostExpensive.price) {
      mostExpensive = this.products[i];
    }
  }
  return mostExpensive.getInfo();
}
/* Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list. */
ShoppingBag.prototype.calculateTotalPrice = function() {
  var sum = 0;
  for (var i = 0; i < this.products.length; i++) {
    sum += this.products[i].price;
  }
  return sum;
}
/* Create a constructor function with properties representing the following: */

/* ●	PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date */
function PaymentCard(accountBalance, active, validUntilDate) {
  this.accountBalance = accountBalance;
  this.active = active;
  this.validUntilDate = validUntilDate;
}
/* Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not. Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. If there is not enough money, print out the amount that is missing to complete the purchase. */ 
  
"use strict";
(function () {
  console.log("Hi");

  var Product = function (
    name,
    price,
    expDate,
    id = (Math.random() * 5).toFixed(4)
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.expirationData = new Date(expDate);
    this.getInfo = function () {
      return (
        this.name.slice(0, 1).toUpperCase() +
        this.name.slice(-1).toUpperCase() +
        this.id.split(".").join("") +
        ", " +
        this.name +
        ", " +
        this.price.toFixed(2)
      );
    };
  };
  var ShoppingBag = function () {
    this.listOfProducts = [];
    this.addProduct = function (product) {
      if (!(product instanceof Product))
        throw new Error("Invalid Product Input");
      if (new Date() > product.expirationData)
        throw new Error("Cant add product whose exp date expired");
      this.listOfProducts.push(product);
    };

    this.calcTotal = function () {
      return this.listOfProducts.reduce((acc, el) => {
        acc += el.price;
        return acc;
      }, 0);
    };

    this.calcAvragePrice = function () {
      return this.calcTotal() / this.listOfProducts.length;
    };
    this.getMostExpensive = function () {
      return this.listOfProducts.reduce((cur, next) => {
        if (cur.price < next.price) {
          cur = next;
        }
        return cur;
      });
    };
  };

  var PaymentCard = function (accBalance, status, valid) {
    this.accountBalance = accBalance.toFixed(2);
    if (!status) throw new Error("Invalid Card status");
    this.status = status;
    this.validityDate = new Date(valid);
    this.updateBalance = function (amount) {
      this.accountBalance = this.accountBalance - amount;
    };
  };

  var checkoutAndBuy = function (shoppingBag, card) {
    var isValid = shoppingBag.calcTotal() < card.accountBalance;
    var calcDiference = shoppingBag.calcTotal() - card.accountBalance;
    if (!isValid)
      throw new Error("Purchase not completed, you need " + calcDiference);
    card.updateBalance(shoppingBag.calcTotal());
    return "Purchase successful";
  };

  try {
    var prodArr = [
      { name: "Banana", price: 25.88, date: "12/28,2022" },
      { name: "Ananas", price: 15.87, date: "10/15,2023" },
      { name: "PC", price: 1000.99, date: "12/28,2023" },
      { name: "Iphone", price: 900.99, date: "02/05,2023" },
    ];
    var newProdArr = prodArr.map(
      (el) => new Product(el.name, el.price, el.date)
    );

    var [prod, prod2, prod3, prod4] = newProdArr;

    var shopBag = new ShoppingBag();

    newProdArr.forEach((el) => shopBag.addProduct(el));

    var myCard = new PaymentCard(2850.855555, true, "12/11/2024");
    var data = checkoutAndBuy(shopBag, myCard);

    console.log(data, myCard.accountBalance);
  } catch (error) {
    console.log(error.message);
  }
})();


