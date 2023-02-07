var uiModul = (function () {


// var festival = new Festival(); 

// var createMovieButton = document.querySelector('.btn');
// var createProgramButton = document.querySelector('.btn1');
// var createAddmovietoProgram = document.querySelector('.btn2');

var inputTitleElement = document.querySelector('.title');
var inputLengthElement = document.querySelector('.length');
var selectGenreElement = document.querySelector('.genre')

var inputDate = document.querySelector('.date1');

var ulMovieList = document.querySelector('.jedanUl');
var ulProgramList = document.querySelector('.dvaUl');

var filmList = document.querySelector('.film');
var selectProgramList = document.querySelector('.programlist');



function collectValues() {


// var k = addMovie()
// k.preventDefault();
console.log('klikkk');
var titleValue = inputTitleElement.value;
var lengthValue = inputLengthElement.value;
var genreValue = selectGenreElement.value;
return {
  titleValue: titleValue,
  lengthValue: lengthValue,
  genreValue: genreValue
  }
}
// console.log(titleValue, lengthValue, genreValue);

function addMovieDom(movie, index) {

// var movie = new Movie(titleValue, lengthValue, new Genre (genreValue));
// festival.listOfMovies.push(movie);

// console.log(movie.getData());

var movieLi = document.createElement('li');
console.log(movieLi, 'jer');

movieLi.textContent = movie.getData();
ulMovieList.appendChild(movieLi);

var movieOption = document.createElement('option');
movieOption.textContent = movie.title;
// var index = listOfMovies.length - 1;
movieOption.setAttribute('value', index);
filmList.appendChild(movieOption);

// inputTitleElement.value = '';
// inputLengthElement.value = '';
// inputGenreElement.value = '';
 }


function addProgram2() {
      
       var dateInput2 = inputDate.value;
      return dateInput2;
    }

    // var date22 = new Date(dateInput2);

   

  function addProgramDom(program, index) {

      // var program = new Program(dateInput2);
      // festival.listOfPrograms.push(program);


      // var index5 = festival.listOfPrograms.length - 1;

      var li = document.createElement('li');
      li.setAttribute('id', 'program-item' + index);
      li.textContent = program.getData();
      console.log(li);
      ulProgramList.appendChild(li);
     
  
      var option = document.createElement('option');
      option.setAttribute('value', index);
      option.textContent = program.getFormatedDate();
      selectProgramList.appendChild(option);

    }

    function updateProgramDom(program, index) {
      ulProgramList.children[index].textContent = program.getData();
    }
   
  function addMovieToProgram2(e) {
      
      //collect data

      var movieIndex = filmList.value;
       console.log(movieIndex);
      var programIndex = selectProgramList.value;
      console.log(programIndex);
      return movieIndex, programIndex
      // {
      //   movie: movieIndex,
      //   program: programIndex
      // }

      // var movie = festival.listOfMovies[movieIndex];
      // console.log(movie);
      // var program = festival.listOfPrograms[programIndex];
      // console.log(program);

      // program.addMovie(movie);
    
}
return {

  collectValues: collectValues,
  addMovieDom: addMovieDom,
  addProgram2: addProgram2,
  addProgramDom: addProgramDom,
  addMovieToProgram2: addMovieToProgram2,
  updateProgramDom: updateProgramDom
  // addMovieToProgram2: addMovieToProgram2
}
})(dataModul);



  


//    let callCount = 0;

// function sum(a, b) {
//   callCount += 1;

//   return a + b;
// }

// sum(1, 2);
// console.log(callCount);
// console.log(sum(1,2));

// const numbers = [60, 2, 8];
// var b = numbers.sort();
// console.log(b);