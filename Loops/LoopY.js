// 1. Pronadji najmanji broj u nizu.
const br = [22,3,6,7,-11,8,-9,23,4,-6,77]
let najmanji = Infinity
for (let i = 0; i < br.length; i++) {

if (br[i] < najmanji) najmanji = br[i]

}
console.log(najmanji);

var m = [[25,34],[18,51],[92,44]];
for (var i=0; i<3; i++) {

for (var j=0; j<2;j++) {
  console.log(m[i][j]);
}

}

const br = [22,3,6,7,-11,8,-9,23,4,-6,77]

for (let i = 0; i < br.length-1; i++) 

if (br[i]<br[i+1]) 
[br[i], br[i+1]] = [br[i+1], br[i]]

console.log(br[br.length-1])

var arr = ["A", "B", "C"];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) { 
    for (var k = 0; k < arr.length; k++) {

    
  console.log(
    arr[i],
    "PRVA PETLJA", arr[j], 'druga petlja', arr[k], 'TRECA P.')
  }
  console.log("CEO KRUG ZA TRECU ");
}
console.log("CEO KRUG ZA DRUGU ");
}

