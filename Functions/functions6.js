
// 1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

function f(a) {

  var b = [];
  for (var i=0; i<a.length; i++) {

    b++;

  } 
    return b;

}

var a = ['a', 'e', 'i', 'o',];
console.log(f(a));

// 2.	Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function f(a, b) {

  var c = []
  for (var i=0; i<a.length; i++) {

    for (var j=0; j<b.length; j++ ) {

      // a[i]=b[j]
      c+=a[i]+b[j]

    }

  }
  return c;

}
var a = ['s', 'd', 'g'];
var b = [1,2,3];
console.log(f(a, b));
// kraj mog zadatka

// pocetak novog resenja
const arr1 = [34, 21, 2, 56, 17];
const arr2 = [12, 86, 1, 54, 28];
let run = 0, first = 0, second = 0;
const newArr = [];
while(run < arr1.length + arr2.length){
   if(first > second){
      newArr[run] = arr2[second];
      second++;
   }else{
      newArr[run] = arr1[first];
      first++;
   }
   run++;
};
console.log(newArr);
// kraj

// pocetak
var abc = ['a', 'b', 'c', 'd' ];
var one = [1, 2, 3 ];

var both = interleave(abc, one);
console.log(both);
// ['a', 1, 'b', 2, 'c', 3, 'd']

// pocetak

var a = ['s', 'd', 'g'];
var b = [1,2,3];

var together = a.concat(b)

console.log(together);

//kraj

// Najbolje resenje

var list_one = [1,3,5];
var list_two = ['a','b','c'];
var array = [];
var array_length = list_one.length+list_two.length;
let j=0,k=0;
for (var i = 0; i < array_length; i++) {
  if(i%2 == 0) {
    array[i] = list_one[k++]
  }else{
    array[i] = list_two[j++]
  }
}
console.log(array)

// 3.	Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function Rotate_and_Print(arr,d,n)
 {
     //Initializing array temp with size n
     var temp=new Array(n);
      
    let k = 0;
 
    // Storing the n - d elements of
    // array arr[] to the front of temp[]
    for (let i = d; i < n; i++) {
        temp[k] = arr[i];
        k++;
    }
 
    // Storing the first d elements of array arr[]
    //  into temp
    for (let i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }
    //Printing the temp array which stores the result
    for (let i = 0; i < n; i++) {
        console.log(temp[i]+" ");
    }
 }
 
let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
let n = arr.length;
let d = 2; //number of times rotating the array
Rotate_and_Print(arr, d, n);

// 4.	Write a function that takes a number and returns array of its digits.

function numReturn(x) {
  var newArray = [];
  if (typeof x === "number") {
      for(var i = 0; i < x; i++) {
          newArray[newArray.length]+=x
      }
      return newArray;
  } else {
      return null;
  }
}
var x = 5;
console.log(numReturn(x));
//nesto nije kako treba, ne mogu niz da dobijem

// 5.	Write a program that prints a multiplication table for numbers up to 12.

for (var i=0; i<12; i++) {
  for (var j=0; j<12; j++) { 

  console.log(`${i} * ${j} = ${i*j}`);
  }
  console.log('------------------------------');
}

// 6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.


function x(c) { 

var f = c*1.8+32;
return f
}

var c = 10;
console.log('We are getting:' + ' ' + x(c) + ' ' + 'Fahrenheit');

// 7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
["1", "21", undefined, "42", "1e+3", Infinity]

function convertToNumArray(arr) {
  var arr2 = [];
 for (var i = 0; i < arr.length; i++) {
      var e = parseFloat(arr[i]);
      if (isFinite(e)) {
          arr2[arr2.length] = e
      }
  } 
  return arr2
}

var f = convertToNumArray(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(f);

// second approach
function largest(arr) { 
  let i; 
  
  // Initialize maximum element 
  let max = arr[0]; 

  // Traverse array elements  
  // from second and compare 
  // every element with current max  
  for (i = 1; i < arr.length; i++) {
      if (arr[i] > max) 
          max = arr[i]; 
  } 
    
return max; 
} 

// Driver code 
let arr = [10, 324, 45, 90, 9808];
console.log(largest(arr));