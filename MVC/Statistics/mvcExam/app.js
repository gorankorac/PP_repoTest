var appModul = (function (subjectClass, studentClass, formClass, examClass) {

  var btn = document.querySelector('.btn');

 

function add(e) {
     e.preventDefault();
   try {var collectForm = formClass.collectData();
     var subjectInput = collectForm.subject;
     var studentInput = collectForm.name;
     var gradeInput = collectForm.grade;
     if (subjectInput === '' || studentInput === '' || gradeInput === '') {
      formClass.setError('Missing input !')
      return;
     }
     var subject = subjectClass.createSubject(subjectInput)
     var student = studentClass.createStudent(studentInput)
     var exam = examClass.createExam(subject, student, gradeInput)
     

     var ullista = document.querySelector('.lista-prosli');
     var ullista2 = document.querySelector('.lista-pali');
     
     var brojac = document.querySelector('.counter-passed');
     var brojac2 = document.querySelector('.counter-failed');
     
     var pass = 0;
     var failed = 0;

     var element = formClass.createElement(exam)

    if (exam.hasPassed()) {
        ullista.appendChild(element) 
    } else {
        ullista2.appendChild(element)
    }
    if (exam.hasPassed()) {
       pass++;
       brojac.textContent = pass;
   } else {
       failed++;
       brojac2.textContent = failed;
   }
    
     formClass.clearInputs();
   
    //  console.log(collectForm, subjectInput, studentInput, gradeInput);
    //  console.log(subject);
    //  subject.getSubjectName() 
    //  console.log(subject.getSubjectName());  
    //  console.log(exam);
    //  console.log(element);
    //  console.log(exam.clearInputs());
  
  }         
 catch (error) {
       console.log(error);
      
       formClass.setError('Something went wrong !')
}
}    
  btn.addEventListener('click', add)
})(subjectModule, studentModule, formModule, examModule);