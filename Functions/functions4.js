// 1.	Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

function f(a, b) {

  c = '';
  for (var i=0; i<a.length; i++) {

    if (b === a[i]) {
      console.log('Yes');
    } else {
      console.log('No');
    }

  }
  return c;

}
var a = [5, -4.2, 3, 7];
var b = 3;
console.log(f(a, b));

// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function f(a) { 

 var c = 2;
 for(var i=0; i<a.length; i++) { 
  if (a[i] > 0) {

      a[i]*=2

    }

  }
  return a;
}

var a = [-3, 11, 5, 3.4, -8];
console.log(f(a));

// 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function smallest(arr) { 
  let i; 
  
  let min = arr[0]; 
   
  for (i = 1; i < arr.length; i++) {
      if (arr[i] < min) 
          min = arr[i];
          min[min.length-1]=arr[i]
          
  }    
return min;
} 

let arr = [10, 324, 45, 90, 9808];
console.log(smallest(arr));

// 4.	Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var arr = [ 6, 3, 5, 2, 9 ];
		var smallest = arr[0]; 
		var secondSmallest = arr[1]; 

		for(var i = 0; i < arr.length; i++) { 
			if(arr[i] < smallest) {  
				smallest = arr[i];  
			}  

			if(arr[i] > smallest && arr[i] < secondSmallest ) { 
				secondSmallest = arr[i]; 
			} 
		} 

		console.log(secondSmallest);

//     5.	Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function f(a) {

b = 0;

for (var i=0; i<a.length; i++) {

  if(a[i] > 0) {
    b+=a[i]
  }

}
return b;
}
var a = [3, 11, -5, -3, 2];
console.log(f(a));

// 6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.






