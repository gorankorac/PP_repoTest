var dataModul = (function () {

  class Festival {
    constructor() {
      this.listOfMovies = [];
      this.listOfPrograms = [];

      }
      addMovieToList(movie) {
        return this.listOfMovies.push(movie)
      }
      addProgramToList(program) {
        return this.listOfPrograms.push(program)
      }
    }
    var festival = new Festival();

class Genre {
    constructor (n) {
      this.name = n;
    }
      getData() {
      return (this.name[0] + this.name[this.name.length - 1]).toUpperCase()
    }
}

var a = new Genre('action');
console.log(a.getData());

class Movie  {
  constructor (t, l, g) {
    // if (!(g instanceof Genre)) throw new Error('Invalid input')
    this.title = t;
    this.movielength = l;
    this.genre = g;
  }

  getData() {
    return this.title + ', ' + this.movielength + 'min, ' + this.genre.getData();
  }
}

class Program {
  constructor (d) {
    this.date = new Date(d) // = date
    this.movieList = [];
  }
  getNumofMovies() {
    return this.movieList.length;
  }
  addMovie(m) {
    this.movieList.push(m)
  }
  getTotallength() {

    var total = 0;
    this.movieList.forEach(function(movie) {
        total += +movie.movielength;
    })
      return total;
  }
  getData() {
    return this.getFormatedDate() + ', movies: ' + this.getNumofMovies() + ', total length: ' + this.getTotallength();
  }

  getFormatedDate() {
    return (
      this.date.getDate() +
      "." +
      (this.date.getMonth() + 1) +
      "." +
      this.date.getFullYear()
    );
  }
}

  function createMovie(t, l, g) {
    return new Movie(t, l, new Genre (g));
  }

  function createProgram(d) {
      return new Program(d);
  }

  function addMovieToList(movie) {
    return festival.listOfMovies.push(movie) - 1;
  }
  function addProgramToList(d) {
    return festival.listOfPrograms.push(d) - 1;
  }
  function renderData(i) {
    var date = festival.listOfPrograms.find((el, index) => {
      return index === i;
    });
    return date.getFormatedDate();
  }

  function addTo(movieIndex, programIndex) {
    var movie = festival.listOfMovies[movieIndex]
    var program = festival.listOfPrograms[programIndex]
    program.listOfMovies.push(movie);
    var programLi = document.querySelector()
  }




return {

  festival: festival,
  genreGetData: Genre.getData,
  movieGetData: Movie.getData,
  movieGetNumofMovies: Program.getNumofMovies,
  movieAddMovie: Program.addMovie,
  moviegetTotalLength: Program.getTotallength,
  movieGetFormattedDate: Program.getFormatedDate,
  festivalAddMovieToList: Festival.addMovieToList,
  festivalAddProgramtoList: Festival.addProgramToList,
  festivalRenderData: Festival.renderData,
  createMovie: createMovie,
  createProgram: createProgram,
  addMovieToList: addMovieToList,
  addProgramToList: addProgramToList,
  renderData: renderData,
  addTo: addTo
  
}

})();
// var festival = new Festival();
//  console.log(festival);
// var matrix = new Movie("matrix", new Genre("action"), '120');
// var titanic = new Movie("titanic", 150, new Genre("Drama"));
//  console.log(matrix.getData());
// var program = new Program("12-11-2023");
// var program1 = new Program("12-08-2023");
//  console.log(program);

//  festival.addProgramToList(program.getFormatedDate())

//  festival.addMovieToList(matrix)