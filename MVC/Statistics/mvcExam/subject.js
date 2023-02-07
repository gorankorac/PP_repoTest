
// function Subject (ime) {
//   this.ime = ime;
// }

// Subject.prototype.getSubjectName = function() {
//   return this.ime;
// }

// module.exports = Subject;

// var f = new Subject ('Gole');
// console.log(f.getSubjectName());
var subjectModule = (function () { 
 class Subject {

  constructor(ime) {
    this.ime = ime;
  }

  getSubjectName() {
    return this.ime;
  }


}

function createSubject(subject) {
  return new Subject(subject)
}

return {
  createSubject: createSubject
}
})();


// module.exports = Subject;

//  var f = new Subject ('Gole');
//  console.log(f.getSubjectName());