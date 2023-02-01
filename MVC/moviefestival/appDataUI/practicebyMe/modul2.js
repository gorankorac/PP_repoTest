 var modul2 = (function() {
   var getResultLabel = function() {
       return "Result is: ";
   };

   return {
       getResultLabel: getResultLabel,
   };
 })()

var uiModule = (function() {
  var resultLabel = function() {
      return "Result is: ";
  };

  return {
      resultLabel: resultLabel,
  };
})();