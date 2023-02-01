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
    this.genre = g;
    this.movielength = l;
  }

  getData() {
    return this.title + ', ' + this.movielength + 'min, ' + this.genre.getData();
  }
}
// var b = new Movie ('DOGA', new Genre ('Horor'), '300')
// console.log(b.getData());
// var matrix = new Movie("matrix", new Genre("action"), '120');
// console.log(matrix.getData());

class Program {
  constructor (d) {
    this.date = new Date(d)
    this.movieList = [];
  }
  getNumofMovies() {
    return this.movieList.length;
  }
  addMovie(m) {
    this.movieList.push(m)
  }
  getTotallength() {

    tot = 0;
    this.movieList.forEach(function(movie) {
        tot += movie.movielength;
    })
      return tot;
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

class Festival {
  constructor() {
    this.listOfMovies = [];
    this.listOfPrograms = [];
  }
  addMovieToList(movie) {
    this.listOfMovies.push(movie);
  }
  addProgramToList(d) {
    this.listOfPrograms.push(d);
  }
  renderData(i) {
    var date = this.listOfPrograms.find((el, index) => {
      return index === i;
    });
    return date.getFormatedDate();
  }
}
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