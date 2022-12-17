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