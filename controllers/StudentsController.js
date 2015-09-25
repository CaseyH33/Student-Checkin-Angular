studentCheckin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

//Toggles the student's checkinStatus between true and false
  $scope.toggleCheckin = function(student) {
    var index = $scope.students.indexOf(student);
    $scope.students[index].checkinStatus = !$scope.students[index].checkinStatus;
  };
});
