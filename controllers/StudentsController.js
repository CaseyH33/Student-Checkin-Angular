studentCheckin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.checkin = function() {
    $scope.checkinStatus = true;
  };
});
