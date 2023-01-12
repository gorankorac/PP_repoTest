function Genre(n) {

  this.name = n;
  this.getData = function () {
    var first = this.name[0];
    var last = this.name[this.name.length - 1];
    var result = first + last;
    return result.toUpperCase();

  }
    
}
var x = new Genre('action');
// x.getData('action');
// console.log(x.getData('action'));
console.log(x.getData());


function Movie(t, g, l) {

  this.title = t;
  this.genre = g;
  this.lengthMovie = l;
  this.getData = function () {

    return this.title + this.lengthMovie + this.genre.getData();

  } 
  // return this.getData()
}

var x = new Movie('hoho' , 'action', '150')

console.log(x);



'use strict';

(function () {
  function Genre(n) {
    if (!n) {
      throw new Error('Property name is required');
    }
    this.name = n;
    this.getData = function () {
      var firstLetter = this.name[0];
      var lastLetter = this.name[this.name.length - 1];
      var result = firstLetter + lastLetter;
      return result.toUpperCase();
    };
  }

  function Movie(t, g, l) {
    if (!t || !g || !l) {
      throw new Error('Missing propertied!');
    }
    if (!(g instanceof Genre)) {
      throw new Error('Invalid genre input!');
    }
    this.title = t;
    this.genre = g;
    this.lengthOfMovie = l;
    this.getData = function () {
      return (
        this.title + ', ' + this.lengthOfMovie + 'min, ' + this.genre.getData()
      );
    };
  }

  function Program(d) {
    if (!d) {
      throw new Error('Property date is required');
    }
    this.date = new Date(d);
    this.movieList = [];
    this.getNumberOfMovies = function () {
      return this.movieList.length;
    };
    this.addMovie = function (m) {
      if (!(m instanceof Movie)) {
        throw new Error('Invalid movie input!');
      }
      this.movieList.push(m);
    };
    this.getTotalLength = function () {
      var total = 0;
      this.movieList.forEach(function (movie) {
        total += movie.lengthOfMovie;
      });
      return total;
    };
    this.getData = function () {
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      var result =
        day +
        '.' +
        month +
        '.' +
        year +
        ', program duration ' +
        this.getTotalLength() +
        'min';
      this.movieList.forEach(function (movie) {
        result += '\n\t\t' + movie.getData();
      });
      return result;
    };
  }

  function Festival(n) {
    if (!n) {
      throw new Error('Property name is required');
    }
    this.name = n;
    this.programList = [];
    this.getTotalNumberOfMovies = function () {
      var total = 0;
      this.programList.forEach(function (program) {
        total += program.getNumberOfMovies();
      });
      return total;
    };
    this.addProgram = function (p) {
      if (!(p instanceof Program)) {
        throw new Error('Invalid program input!');
      }
      this.programList.push(p);
    };
    this.getData = function () {
      var result =
        this.name +
        ' festival has ' +
        this.getTotalNumberOfMovies() +
        ' movie titles';
      this.programList.forEach(function (program) {
        result += '\n\t' + program.getData();
      });
      return result;
    };
  }

  function createMovie(t, l, g) {
    var genre = new Genre(g);
    var movie = new Movie(t, genre, l);
    return movie;
  }

  function createProgram(d) {
    return new Program(d);
  }

  //Testing
  try {
    var kustendorf = new Festival('Kustendorf');

    // var sundayProgram = createProgram('12/24/2022');
    // var mondayProgram = createProgram('12/25/2022');

    // var rushHours = createMovie('Rush Hour', 95, 'action');
    // var theRing = createMovie('The Ring', 103, 'horror');
    // var frida = createMovie('Frida', 87, 'drama');
    // var tropicThunder = createMovie('Tropic Thunder', 91, 'comedy');

    // sundayProgram.addMovie(rushHours);
    // sundayProgram.addMovie(theRing);
    // mondayProgram.addMovie(frida);
    // mondayProgram.addMovie(tropicThunder);

    // kustendorf.addProgram(sundayProgram);
    // kustendorf.addProgram(mondayProgram);

    console.log(kustendorf.getData());
  } catch (error) {
    console.log(error.message);
  }
})();


function Robot(name) {

this.name = name;
this.energy = 100;
this.charge = function() {

 return this.energy++;

}

this.move = function(mx, my) {

}
}

var r = new Robot('r2d2');
console.log(r);
console.log(r.charge());


function Robot(name) {

  var t = this;

  t.name = name;
  t.energy = 100;
  t.charge = function() {
  
   return t.energy++;
  
  }
  
  t.move = function(mx, my) {
  
  }
  }
  
  var r = new Robot('r2d2');
  console.log(r);
  console.log(r.charge());


  'use strict'

  (function () {

    function Product( n, p, ed) {

      this.id = Math.floor(Math.random() * 90000) + 10000;
      // this.prodID = function () {

      //     var a = (Math.Floor(Math.Random() * 10000));
      //     return a;

      // }
        this.name = n;
        this.price = p;
        this.exDate = new Date(ed);
        this.getInfo = function () {
          var firstName = this.name[0];
          var lastName = this.name[this.name.length - 1]
          var result = firstName.toUpperCase() + lastName.toUpperCase() + this.id + ', ' + this.name + ', ' + this.price.toFixed(2);
          return result; 
        }
        }
        var x = new Product('Banana', 15, new Date(2018, 10, 10));
        var s = new Product('Jabuka', 20, new Date(2019, 10, 10));
         console.log(x);
         console.log(x.getInfo());

         function ShoppingBag() {

          this.listOfProducts = [];
          this.addProduct = function(Product) {
           
            this.listOfProducts.push(Product);
            
          } 
      }
      var y = new ShoppingBag();
      console.log(y);
      console.log(y.addProduct());





    }) ();