 (function (ui, data) {
   var result = data.sum(15, 2);
   var label = ui.getResultLabel();

   console.log(label + result);

 })(modul2, modul1);


(function (ui, data) {
  var result = data.sum(10, 2);
  var label = ui.resultLabel();

  console.log(label + result);

})(uiModule, dataModule)