
// function Subject (ime) {
//   this.ime = ime;
// }

// Subject.prototype.getSubjectName = function() {
//   return this.ime;
// }

// module.exports = Subject;

// var f = new Subject ('Gole');
// console.log(f.getSubjectName());

class Subject {

  constructor(ime) {
    this.ime = ime;
  }

  getSubjectName() {
    return this.ime;
  }

}
// module.exports = Subject;

//  var f = new Subject ('Gole');
//  console.log(f.getSubjectName());