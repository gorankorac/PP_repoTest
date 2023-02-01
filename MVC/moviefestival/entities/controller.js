 var festival = new Festival(); 

var createMovieButton = document.querySelector('.btn');
var createProgramButton = document.querySelector('.btn1');
var createAddmovietoProgram = document.querySelector('.btn2');

var inputTitleElement = document.querySelector('.title');
var inputLengthElement = document.querySelector('.length');
var selectGenreElement = document.querySelector('.genre')

var inputDate = document.querySelector('.date1');

var ulMovieList = document.querySelector('.jedanUl');
var ulProgramList = document.querySelector('.dvaUl');

var filmList = document.querySelector('.film');
var selectProgramList = document.querySelector('.programlist');



function addMovie(e) {

e.preventDefault();
// var k = addMovie()
// k.preventDefault();
console.log('klikkk');
var titleValue = inputTitleElement.value;
var lengthValue = inputLengthElement.value;
var genreValue = selectGenreElement.value;
console.log(titleValue, lengthValue, genreValue);

var movie = new Movie(titleValue, lengthValue, new Genre (genreValue));
festival.listOfMovies.push(movie);
console.log(movie.getData());
var movieLi = document.createElement('li');
console.log(movieLi, 'jer');

movieLi.textContent = movie.getData();
ulMovieList.appendChild(movieLi);


var movieOption = document.createElement('option');
movieOption.textContent = movie.title;
var index = festival.listOfMovies.length - 1;
movieOption.setAttribute('value', index);
filmList.appendChild(movieOption);

// inputTitleElement.value = '';
// inputLengthElement.value = '';
// inputGenreElement.value = '';

}




function addProgram(e) {

  e.preventDefault();

    var dateInput2 = inputDate.value;

    // var date22 = new Date(dateInput2);

    var program = new Program(dateInput2);
    festival.listOfPrograms.push(program);


    var index5 = festival.listOfPrograms.length - 1;
    var li = document.createElement('li');
    li.setAttribute('id', 'program-item' + index5);
    li.textContent = program.getFormatedDate();
    ulProgramList.appendChild(li);

    var option = document.createElement('option');
    option.setAttribute('value', index5);
    option.textContent = program.getFormatedDate();
    selectProgramList.appendChild(option);
  }
  



  function addMovieToProgram(e) {
    e.preventDefault();
    //collect data

    var movieIndex = filmList.value;
    console.log(movieIndex);
    var programIndex = selectProgramList.value;
    console.log(programIndex);

    var movie = festival.listOfMovies[movieIndex];
    console.log(movie);
    var program = festival.listOfPrograms[programIndex];
    console.log(program);

     program.addMovie(movie);
    


}



   createMovieButton.addEventListener('click', addMovie);
   createProgramButton.addEventListener('click', addProgram);
   createAddmovietoProgram.addEventListener('click', addMovieToProgram);


   let callCount = 0;

function sum(a, b) {
  callCount += 1;

  return a + b;
}

sum(1, 2);
console.log(callCount);
console.log(sum(1,2));