// 1.	Write a function that checks if a given string contains digit 5.
// Input: “1b895abd” 
// Output: true

function f(a) {

var b ='';
for (i=0; i<a.length; i++) {

var c = a[i]=== '5' ? true : false  

  

}
  return c
}

var a = '1b895abd'
var m =  f(a)

console.log(m);







// 2.	Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

(function f(a) { 
  var a = 'Programming in JS is super interesting!';
  var b = '';
  for (i=0; i<a.length; i++) {
  
  var c = a[i] === "J" || a[i] === "S" ? "*" : a[i];
      b += c;
      }
      console.log(b);
      return b;
    })("Programming in JS is super interesting!");

    var a = [1,2,3,-9,5,8]
    var g = Infinity
    for (var i = 0; i<a.length; i++) {

      if (a[i]<g) g = a[i];

    }

      console.log(g);