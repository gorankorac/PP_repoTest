
// 1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 



// 2.	Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function f(a, b) {

  var c = []
  for (var i=0; i<a.length; i++) {

   c[c.length]=a[i];
   c[c.length]=b[i]

  }
  return c;

}
var a = ['s', 'd', 'g'];
var b = [1,2,3];
console.log(f(a, b));


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


function f(arr, k) {

  var arr1=[]
  for(var i=k,j=k-arr.length; i<arr.length+k; i++, j++) {

    //  console.log(arr[j]);
     console.log(i,j);
     
    // arr1[arr1.length]=arr[i]
    if (i<arr.length) {
      arr1[arr1.length]=arr[i]
    } else {
      arr1[arr1.length]=arr[j]
    }
  }
      console.log(arr1);
      return arr1
}
f([1, 2, 3, 4, 5, 6, 7], 2)




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

function ret(num) {

  var s=''+num;
  var d=[];
  for(var i=0; i<s.length; i++) {

    console.log(s[i]);
    d[d.length]=+s[i] // kad udarim + s[i] postaju brojevi, bez + su stringovi!!!
  }
    console.log(d);
    return d
}

ret(555);

// 5.	Write a program that prints a multiplication table for numbers up to 12.

for (var i=0; i<12; i++) {
  for (var j=0; j<12; j++) { 

  console.log(`${i} * ${j} = ${i*j}`);
  }
  console.log('------------------------------');
}

// second way
function n(a) {  

  var m = '';

for (var i=0; i<a; i++) {
  for (var j=0; j<a; j++) { 
    
    var c = i*j;
    var b = i + '*' + j

    m += (b + '=' + c + '\n');
    
  }
  console.log('-------------');
}

return m;

}
console.log(n(12));

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

// 8.	Write a function to find the maximum and minimum elements. Function returns an array.

// 10.	Write a function to find the element that occurs most frequently.

function occur(arr) {
  var output='';
  var maxCount=0;

  for(var i=0; i<arr.length; i++) {

    var count = 0;

    for(var j=0; j<arr.length; j++) {

      //  console.log(arr[i],arr[j]);
      if (arr[i]===arr[j]) {
        count++;
       console.log(arr[i],count);
      }
      if(count>maxCount) {
        maxCount=count;
        // console.log(arr[i]);
        output=arr[i]
      }
    }
    console.log('-----------------');
  }

console.log(output);
} 
occur(['a', 'b', 'c', 'a', 'a', 'c', 'd', 'c', 'c'])


var original = {

  brojac:1

}

var kopija = {...original}

kopija.brojac = 100;
console.log(original.brojac);