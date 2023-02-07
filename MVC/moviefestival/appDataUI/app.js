var appMode = (function (data, ui) {

  var createMovieButton = document.querySelector('.btn');
  var createProgramButton = document.querySelector('.btn1');
  var createAddmovietoProgram = document.querySelector('.btn2'); 
  var movieerror = document.querySelector('#add-movie-error')
  var programError = document.querySelector('#add-program-error')
  var addMovietoProgramError = document.querySelector('#addmovietoprogramerror')

function addMovie(e) {
  try { e.preventDefault();
    var collectData = ui.collectValues();
    console.log(collectData);
    if (collectData.titleValue === '' || collectData.lengthValue === '' || collectData.genreValue === '') throw new Error('Invalid movie !')
    var createdMovieObject = data.createMovie(collectData.titleValue, collectData.lengthValue, collectData.genreValue);
    console.log(createdMovieObject);
    var index = data.festival.addMovieToList(createdMovieObject) - 1;
    console.log(index);
    ui.addMovieDom(createdMovieObject, index) } 
    catch(error) {
      console.log(error.message);
      movieerror.textContent = error.message
    }
}

function addProgram(e){
  try { e.preventDefault();
    var collectDate = ui.addProgram2()
     if (collectDate === '') throw new Error('Invalid Program !')
    console.log(collectDate);
     var createdProgramObject = data.createProgram(collectDate)
     console.log(createdProgramObject);
    
    var index = data.festival.addProgramToList(createdProgramObject)- 1;
    ui.addProgramDom(createdProgramObject, index)
  }
    catch(error) {
      console.log(error.message);
      programError.textContent = error.message;
    }
}

function addMovieToProgram(e) {
  try {e.preventDefault();
    var collect = ui.addMovieToProgram2();
    if (collect === '') throw new Error ('There is no input !')
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
    catch(error) {
      console.log(error.message);
      addMovietoProgramError.textContent = error.message;

    }
  
}


createMovieButton.addEventListener('click', addMovie);
createProgramButton.addEventListener('click', addProgram);
createAddmovietoProgram.addEventListener('click', addMovieToProgram);

})(dataModul, uiModul);

