studentCheckin.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];
//Adds a new student with an inputted name and a defaulted checkinStatus to false
  factory.addStudent = function() {
    factory.students.push({name: factory.studentName, checkinStatus: false});
    factory.studentName = null;
  };
  return factory;
})
