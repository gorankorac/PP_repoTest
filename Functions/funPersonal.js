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

