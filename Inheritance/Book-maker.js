(function () {

    function Country (n, o, c) {

      this.name = n;
      this.odds = o;
      this.continent = c;

    }

    function Person (n, s, d) {

      this.name = n;
      this.surname = s;
      this.date = new Date (d)

    }

    Person.prototype.getPerson = function () {
      return this.name + ' ' + this.surname + ' ' + this.date.getDay() + '.' + (this.date.getMonth()+1) + '.' + this.date.getFullYear();
    }

    function Player (n, s, d, betamount, country) {
      Person.call(this, n, s, d)
      this.betamount = betamount;
      this.country = country;
    }

    Player.prototype = Object.create(Person.prototype);
    Player.prototype.constructor = Player;

    Player.prototype.getPlayer = function () {
      return '\t\t\t\t\t' + this.country.name + ', ' + this.betamount*this.country.odds + 'eur' + ', ' + this.person.getPerson();
    }

    Player.prototype.betCount = function () {
      return this.betamount.length
    }

    function Address (country, t, pc, s, sn) {
      this.country = country;
      this.city = t;
      this.postalCode = pc;
      this.street = s;
      this.streetNumber = sn;
    }

    Address.prototype.getAddress = function () {

      return this.street + ' ' + this.streetNumber + ', ' + this.postalCode + ', ' + this.city + ', ' + this.country;

    }

    function BettingPlace (address) {
      this.listofPlayers = [];
      Address.call(address)
    }

    BettingPlace.prototype = Object.create(Address.prototype);
    BettingPlace.prototype.constructor = BettingPlace

    BettingPlace.prototype.addPlayer = function (player) {
      return this.listofPlayers.push(player)
    }

    BettingPlace.prototype.getBetamount = function () {
      var sum = 0;
      for (i=0; i<this.listofPlayers.length; i++) {
      sum += this.listofPlayers[i].betamount;
      // this.listofPlayers[i].betamount;
    }
    return sum;
    }

    BettingPlace.prototype.getBettingplace = function () {
      return this.listofPlayers.length;
    }

    function Bettinghouse (competition) {
      this.competition = competition;
      this.numl = []
      this.listofBettingPlaces = [];

    }

    Bettinghouse.prototype.addbettingPlaces = function (BettingPlace) {
      return this.listofBettingPlaces.push(BettingPlace)
    }

    Bettinghouse.prototype.head = function () {
      return this.competition + ', ' + this.countPlaces() + ' betting places,' + ' ' + this.conum() + ' ' + 'bets'
    }

    BettingPlace.prototype.countPlaces = function () {
      
    }









})