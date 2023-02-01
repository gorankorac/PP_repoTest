 var modul1 = (function() {
   var sum = function(a, b) {
     return a + b;
   }
   var multiply = function (a, b) {
     return a * b;
   }
   return {
     sum: sum,
     multiply: multiply
   }
 })();

var dataModule = (function () {
  var sum = function(a,b) {
      return a + b;
  };

  var multiply = function(a, b) {
      return a * b;
  };

  return {
      sum: sum,
      multiply: multiply,
  };

})()