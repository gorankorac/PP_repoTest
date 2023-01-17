(function () {

  function Person (n, s) {
    this.name = n;
    this.surname = s;
    this.getData = function () {
      return (this.name + ' ' + this.surname).toString(); // join('')
    }
  }

  var w = new Person ('Stanko', 'Protic')
  console.log(w.getData());


  function Seat (n, category) {
    this.number = n;
    this.category = category;
    this.getCategory = function () {
      if ((this.category === 'B') || (this.category ==='E')) {
        return this.category 
      } else {
        return 'E';
      }
    }
    this.getData = function () {
      if (this.number) {
        return (this.number + ', ' + this.getCategory()).toString();
      } else {
        return ((this.number.Math.floor(Math.random() * (100 - 10 + 1)) + 10) + ', ' + this.getCategory()).toString();
      }
    };
      
    }
  

  var a = new Seat (100, 'B');
  console.log(a.getData());



  function Passenger (person, seat) {
    if (!(person instanceof Person) && (!(seat instanceof Seat))) {
      throw new Error ('Invalid Input !')
    }
    this.getData = function () {
      return seat.getData() + ', ' + person.getData()
    }
  }

  var t = new Passenger (w, a);
  console.log(t.getData());

  

  function Flight (relation, date) {

    this.relation = relation;
    this.date = new Date(date);
    this.list = [];
    this.addPassenger = function (passenger) {
      return this.list.push(passenger)
    }
   
    this.getData = function () {
      var output = '';
  output += this.date.getDay() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear() + ', ' + this.relation + '\n';
  for (var i = 0; i < this.list.length; i++) {
    output += '\t\t\t\t\t' + this.list[i].getData() + '\n';
  }
  return output;

    }

    this.ss = function () {
      var j = ''
      this.list.forEach(function(passenger) {
         j += passenger.getData() 
      }) 
      return this.date.getDay() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear() + ', ' + this.relation + '\n\t\t\t\t\t' +  j;
    }

  }
  var x = new Flight ('Belgrade - Rome', 15/06/2022)
  console.log(x);

  console.log(x.addPassenger(t)); //1
  // console.log(x.getData());
  console.log(x.ss());


  function Airport (name) {
    this.name = name;
    this.listofFlights = [];
    this.addFlight = function (Flight) {
      return this.listofFlights.push(Flight)
    }
  }

  // x.addFlight();

  var k = new Airport ('Nikola Tesla')
  console.log(k);
  console.log(k.addFlight(x));
 

  









}) ();