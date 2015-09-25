studentCheckin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.toggleCheckin = function(status) {
    $scope.checkinStatus = status;
  };
});
