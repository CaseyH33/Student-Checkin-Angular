var studentCheckin = angular.module('studentCheckin', ['ui.router']);

studentCheckin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('student-view', {
    url: "",
    templateUrl: "partials/student-view.html"
  });

  $stateProvider.state('teacher-view', {
    url: "",
    templateUrl: "partials/teacher-view.html"
  });
});
