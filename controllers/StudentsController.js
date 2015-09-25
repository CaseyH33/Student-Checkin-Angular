studentCheckin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.toggleCheckin = function() {
    $scope.checkinStatus = !$scope.checkinStatus;
    console.log($scope.checkinStatus);
  };
});
