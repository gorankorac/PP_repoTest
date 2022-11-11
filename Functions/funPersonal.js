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