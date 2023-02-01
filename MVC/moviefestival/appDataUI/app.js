var appMode = (function (data, ui) {

  var createMovieButton = document.querySelector('.btn');
  var createProgramButton = document.querySelector('.btn1');
  var createAddmovietoProgram = document.querySelector('.btn2'); 


function addMovie(e) {
  e.preventDefault();
  var collectData = ui.collectValues();
  console.log(collectData);
  
  var createdMovieObject = data.createMovie(collectData.titleValue, collectData.lengthValue, collectData.genreValue);
  console.log(createdMovieObject);
  var index = data.festival.addMovieToList(createdMovieObject) - 1;
  console.log(index);
  ui.addMovieDom(createdMovieObject, index) 

}

function addProgram(e){
  e.preventDefault();
  var collectDate = ui.addProgram2()
  console.log(collectDate);
   var createdProgramObject = data.createProgram(collectDate)
   console.log(createdProgramObject);
  var index = data.festival.addProgramToList(createdProgramObject)- 1;
  ui.addProgramDom(createdProgramObject, index)


}

function addMovieToProgram(e) {
  e.preventDefault();
  var collect = ui.addMovieToProgram2();
  console.log(collect);
  var targetMovie = data.festival.listOfMovies.find(function(el, index) {
    return index === +collect.movie;
  })
  var targetProgram = data.festival.listOfPrograms.find(function(el, index) {
    return index === +collect.program;
  })
  targetProgram.addMovie(targetMovie)
   targetProgram.getData()
   ui.updateProgramDom(targetProgram, +collect.program)
  // console.log(targetMovie, targetProgram);
}


createMovieButton.addEventListener('click', addMovie);
createProgramButton.addEventListener('click', addProgram);
createAddmovietoProgram.addEventListener('click', addMovieToProgram);

})(dataModul, uiModul);

