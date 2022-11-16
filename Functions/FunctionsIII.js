     // Vezbanje 3.

// 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertString(str1, str2, p) {
    if (!p) {
      p = 1;
    }
    var output = "";
    for (var i = 0; i < str1.length; i++) {
      if (i === p - 1) {
        output += str2
      }
      output += str1[i]
    }
    return output
  }
  
  var b = insertString("My random string", "JS", 10);
  console.log(b)

// 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

  function str(arr) {

    var result="";
    for (var i=0; i<arr.length; i++){ 
    if (isFinite(arr[i]) && arr[i] !==null) {
  
     result+=arr[i]
    }
    }
      return result;
  }
  var arr = [NaN, 0, 15, false, -22, undefined, 47, null];
   console.log(str(arr));

//  function joinNumb (array) {
//    var string = '';
//    for(i=0; i<array.length; i++){
//        if(!!(array[i]) == true){
//            string += array[i];
//        } 
//    } return string;
 
//  }
//  console.log(joinNumb([NaN, 0, 15, false, -22, undefined, 47, null]));
//  console.log(typeof(joinNumb([NaN, 0, 15, false, -22, undefined, 47, null])));

//  3.	Write a program to filter out falsy values from the array.

//  [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
 
function removeFalsy (arr) {
    var a = [];
    for (i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
   
         a[a.length] = arr[i];
        }
    }
    return a
   }
   
   var f = removeFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]);
   console.log (f);

// Drugi nacin 

function makeNewString(array) {
    var newArray = "";
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) === true && (array[i]) !== null ) {
            newArray = newArray + " " + array[i];
        }
    }
    return newArray;
    }
    var t = makeNewString([NaN, 0, 15, false, -22,"", undefined, 47, null]);
    console.log(t);

// // 4.	Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function rev(n) {
    let r = ''
    for (i = n.length - 1; i >= 0; i--)
      r += n[i]
    return r
  }

  console.log(rev('12345'))

  // 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

function tru(m) { 

  let t = m[m.length-1];

  return t;
   }
console.log(tru([7, 9, 0, 10]));

function tru2(m, ind) {

  arr=[];

for (i=ind; i>0; i--) {

arr[arr.length]=m[i]

}
return arr
}
console.log(tru2([7, 9, 0, 10], 3));

// 6.	Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 


function fg(m,n) { 
  if(typeof n==='undefined') return m;
  let h = '';
  
  for (let i=0; i<n; i++ ) {
  
  h += m
  
  }
  return h
  }
  console.log(fg (5, 3));

  // 8.	Write a function to find a word within a string.

  // 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
  // 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function f(a,b) {

var c='';
for(var i=0; i<a.length; i++) {
if (a[i] === b[i] ) { 

c++

}
}
return c
}
var a = 'The quick brown fox';
var b = 'fox';
console.log(f(a, b));

{
  var x = 2;
}
console.log(x);


  


//   10.	Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;





 










