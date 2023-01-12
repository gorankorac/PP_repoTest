

     // 'use strict'

(function () {

  function Country (n, o, c) {
    this.name = n;
    this.odds = o;
    this.continent = c;
  
  }
   var a = new Country ('England', 3.00, 'EU')
  // console.log(a);
  
  function Person (n, s, d) {
    this.name = n;
    this.surname = s;
    this.date = new Date (d);
    this.getPerson = function () {
      return this.name + ' ' + this.surname + ' ' + this.date.getDay() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear();
    }
  }
     var f = new Person ('Petar', 'Davidovich', 5,5,2022 )
  // console.log(f.getPerson());
  
  function Player (person, betamount, country) {
    //  if (!(person instanceof Person && country instanceof Country)) { 
    //   throw new Error ('Invalid person or country')
    //  }
       
    
    this.person = person;
    this.betamount = betamount;
    this.country = country;
    this.getPlayer = function () {
      return '\t\t\t\t\t' + this.country.name + ', ' + this.betamount*this.country.odds + 'eur' + ', ' + this.person.getPerson();
    }
    this.betCount = function () {
      return this.betamount.length
    }
  }
  
  
   var u = new Player (f, 1000, a)
  // console.log(u.getPlayer());
  
  function Address (country, t, pc, s, sn) {
  
  this.country = country;
  this.city = t;
  this.postalCode = pc;
  this.street = s;
  this.streetNumber = sn;
  this.getAddress = function () {
    return this.street + ' ' + this.streetNumber + ', ' + this.postalCode + ', ' + this.city + ', ' + this.country;
  }
  
  }
  
   var p = new Address (a, 'London', '88000', 'Thompson', '100');
   var k = new Address ('England', 'New Castle', '99000', 'Jonson str', '784')
  // console.log(p.getAddress());
  
  
  
  function BettingPlace(address) {
  
  
  this.listofPlayers = [];
  this.address = address;
  this.addPlayer = function (player) {
  return this.listofPlayers.push(player)
  }
  this.getBetamount = function () {
    var sum = 0;
    for (i=0; i<this.listofPlayers.length; i++) {
      sum += this.listofPlayers[i].betamount;
      // this.listofPlayers[i].betamount;
    }
    return sum;
  }
  this.getBettingplace = function () {
    return '\t\t\t' + this.address.street + ', ' + this.address.postalCode + ' ' + this.address.city + ', ' + 'Sum of all bets:' + this.getBetamount();
  }
  this.getNumofplayers = function () {
    var tot=0;
    for(var i=0; i<this.listofPlayers.length; i++) {
      tot += this.listofPlayers[i].betamount;
    }
   return '\t\t\t' + this.address.street + ', ' + this.address.postalCode + ' ' + this.address.city + ', ' + 'Sum of all bets:' + tot;
  }

  }
  
   var g = new BettingPlace (k);
   console.log(g.addPlayer(u));
    console.log(g.getBettingplace());
   console.log(g.getNumofplayers());
  

  function Bettinghouse (competition) {
  
  this.numpl=0;  
  this.competition = competition;
  this.listofBettingPlaces = [];
  this.addbettingPlaces = function (BettingPlace) {
    return this.listofBettingPlaces.push(BettingPlace)
  }
   this.head = function () {
      return this.competition + ', ' + this.listofBettingPlaces.length + ' betting places,' 
   }
   this.countPlaces = function () {
    
      return this.listofBettingPlaces.length;

   }
  }
  // var chl = new Bettinghouse("Champion League");
  // console.log(chl.addbettingPlaces()); 
  
  var CONTINENT = {
    ASIA: "AS",
    EUROPE: "EU",
    AFRICA: "AF",
    SOUTH_AMERICA: "SA",
    NORTH_AMERICA: "NA",
    AUSTRALIA: "AU",
  };
  
  function createPlayer (person, betamount, country) {
    var newPlayer = new Player (person, betamount, country);
    return newPlayer;
    }
  
    function createBettingplace (Address) {
  
      var newBettingplace = new BettingPlace (Address);
      return newBettingplace;
  
    }
  
    // var chl = new Bettinghouse ('Football World Cup Winner')
    // console.log(chl.head());
  
    var per1 = new Person ('Petar', 'Davidovich', 5,5,2022 )
    var per2 = new Person ('Jovan', 'Djokovich', 5,5,2022 )
    var per3 = new Person ('Andrej', 'Tomich', 5,5,2022 )
    var per4 = new Person ('Ana', 'Ahmedovich', 5,5,2022 )
  
    var land1 = new Country ('Poland', 2.75, 'TO')
    var land2 = new Country ('Slovenia', 3.75, 'OPA')
    var land3 = new Country ('Croatia', 5.75, 'KLOP')
    var land4 = new Country ('Hungary', 10.75, 'TOK')

    var play11 = createPlayer (per1, 1000, land1)
    console.log(play11.getPlayer()); //Poland,2750,Petar Davidovich 4.1.1970
   
    var play22 = createPlayer (per2, 2000, land2)
    console.log(play22.getPlayer()); // Slovenia, 7500, Jovan Djokovich 4.1.1970
    var play33 = createPlayer (per3, 3000, land3)
    var play44 = createPlayer (per4, 4000, land4)

    var adr1 = new Address ('Serbia', 'Belgrade ', 11000, 'Nehruova ', 66)
    var adr2 = new Address ('Italia', 'Rome ', 22000, 'Garibaldijeva ', 78)
    
    var betplace1 = createBettingplace(adr1)
    console.log(betplace1);
    var betplace2 = createBettingplace(adr2)
    console.log(betplace2);

   

    console.log(adr1.getAddress()); // Nehruova  66, 11000, Belgrade , Serbia

    console.log(betplace1.addPlayer(play11)); // 1
    console.log(betplace1.addPlayer(play22)); // 2 dva igraca na jednom mestu za kladjenje

    console.log(betplace2.addPlayer(play33));
    console.log(betplace2.addPlayer(play44));



    var chl = new Bettinghouse ('Football World Cup Winner')
    console.log(chl.head());

    console.log(chl.addbettingPlaces(betplace1)); // 1
    console.log(chl.addbettingPlaces(betplace2)); // 2 prikazuje dva mesta za kladjenje

    var chl = new Bettinghouse ('Football World Cup Winner')
    console.log(chl.head());

    // console.log(chl.listofBettingPlaces);

    var betplace1 = createBettingplace(adr1)
    console.log(betplace1.getBettingplace());

    console.log(play11.getPlayer());
    console.log(play22.getPlayer());

    var betplace2 = createBettingplace(adr2)
    console.log(betplace2.getBettingplace());

    console.log(play33.getPlayer());
    console.log(play44.getPlayer());

    console.log(chl.addbettingPlaces(betplace1));
    console.log(chl.addbettingPlaces(betplace2));
    console.log(chl.listofBettingPlaces.length);








    // 'use strict'

(function () {

  function Country (n, o, c) {
    this.name = n;
    this.odds = o;
    this.continent = c;
  
  }
  var a = new Country ('England', 3.00, 'EU')
  console.log(a);
  
  function Person (n, s, d) {
    this.name = n;
    this.surname = s;
    this.date = new Date (d);
    this.getPerson = function () {
      return this.name + ' ' + this.surname + ' ' + this.date.getDay() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear();
    }
  }
  var f = new Person ('Petar', 'Davidovich', 5,5,2022 )
  console.log(f.getPerson());
  
  function Player (person, betamount, country) {
    //  if (!(person instanceof Person && country instanceof Country)) { 
    //   throw new Error ('Invalid person or country')
    //  }
       
    
    this.person = person;
    this.betamount = betamount;
    this.country = country;
    this.getPlayer = function () {
      return this.country.name + ',' + this.betamount*this.country.odds + ',' + this.person.getPerson();
    }
  
  }
  
  
  var u = new Player (f, 1000, a)
  console.log(u.getPlayer());
  
  function Address (country, t, pc, s, sn) {
  
  this.country = country;
  this.city = t;
  this.postalCode = pc;
  this.street = s;
  this.streetNumber = sn;
  this.getAddress = function () {
    return this.street + ' ' + this.streetNumber + ', ' + this.postalCode + ', ' + this.city + ', ' + this.country.name;
  }
  
  }
  
  var p = new Address (a, 'London', '88000', 'Thompson', '100');
  var k = new Address ('England', 'New Castle', '99000', 'Jonson str.', '784')
  console.log(p.getAddress());
  
  
  
  function BettingPlace(address) {
  
  this.listofPlayers = [];
  this.address = address;
  this.addPlayer = function (player) {
  return this.listofPlayers.push(player)
  }
  this.getBetamount = function () {
    var sum = 0;
    for (i=0; i<this.betamount; i++) {
      sum += this.betamount 
      // this.listofPlayers[i].betamount;
    }
    return sum;
  }
  this.getBettingplace = function () {
    return this.address.street + ',' + this.address.postalCode + ' ' + this.address.city + ',' + 'Sum of all bets:' + this.getBetamount();
  }
  }
  
  var g = new BettingPlace (k);
  // console.log(g.addPlayer(u));
  console.log(g.getBettingplace());
  
  function Bettinghouse (competition) {
  
  this.competition = competition;
  this.listofBettingPlaces = [];
  this.addbettingPlaces = function (BettingPlace) {
    return this.listofBettingPlaces.push(BettingPlace)
  }
  
  }
  // var chl = new Bettinghouse("Champion League");
  // console.log(chl.addbettingPlaces()); 
  
  var CONTINENT = {
    ASIA: "AS",
    EUROPE: "EU",
    AFRICA: "AF",
    SOUTH_AMERICA: "SA",
    NORTH_AMERICA: "NA",
    AUSTRALIA: "AU",
  };
  
  function createPlayer (person, betamount, country) {
    var newPlayer = new Player (person, betamount, country);
    return newPlayer;
    }
  
    function createBettingplace (address) {
  
      var newBettingplace = new BettingPlace (address);
      return newBettingplace;
  
    }
  
    var chl = new Bettinghouse("Football World Cup Winner");
  
    var per1 = new Person ('Petar', 'Davidovich', 5,5,2022 )
    var per2 = new Person ('Jovan', 'Djokovich', 5,5,2022 )
    var per3 = new Person ('Andrej', 'Tomich', 5,5,2022 )
    var per4 = new Person ('Ana', 'Ahmedovich', 5,5,2022 )
  
    var land1 = new Country ('Poland', 2.75, 'TO')
    var land2 = new Country ('Slovenia', 3.75, 'OPA')
    var land3 = new Country ('Croatia', 5.75, 'KLOP')
    var land4 = new Country ('Hungary', 10.75, 'TOK')
  
  
    var play1 = new Player (per1, 1000, land1)
    var play2 = new Player (per2, 2000, land2)
    var play3 = new Player (per3, 3000, land3)
    var play4 = new Player (per4, 4000, land4)
  
    console.log(play1.getPlayer());
    console.log(play2.getPlayer());
  
    
   
  
  
  
    var adr1 = new Address ('Serbia', 'Belgrade', 11000, 'Nehruova', 66)
    var adr2 = new Address ('Italia', 'Rome', 11000, 'Gandijeva', 78)
    
    var betplace1 = new BettingPlace(adr1)
    var betplace2 = new BettingPlace(adr2)
  
    console.log(betplace1.getBettingplace());
    console.log(betplace2.getBettingplace());
    console.log(betplace1.addPlayer());
  
    betplace1.addPlayer(play1)
    betplace1.addPlayer(play2)
    betplace2.addPlayer(play3)
    betplace2.addPlayer(play4)
  
    console.log(betplace1.addPlayer(play1));
    console.log(betplace2.addPlayer(play4));
    
  
    // chl.betplace1
    // chl.betplace2
    console.log(chl.addbettingPlaces());
  
  })();

