studentCheckin.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;

  $scope.checkin = function() {
    $scope.checkinStatus = true;
    console.log($scope.checkinStatus);
  };

  $scope.checkout = function() {
    $scope.checkinStatus = false;
  };
});
