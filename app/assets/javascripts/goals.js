var goalsApp = angular.module('goalsApp',[]);

goalsApp.controller('AppCtrl', ['$scope','$http',function($scope,$http) {

  $scope.currentYear = (new Date()).getFullYear();
  $scope.months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  $http.get('/goals').then(function successCallback(response){
    $scope.years = {};
    angular.forEach(response.data, function(row) {
      if (!$scope.years.hasOwnProperty(row.year)) {
        $scope.years[row.year] = {};
      }
      if (!$scope.years[row.year].hasOwnProperty(row.month)) {
        $scope.years[row.year][row.month] = [];
      }
      $scope.years[row.year][row.month].push({
        id: row.id,
        name: row.name,
        completed: row.complete
      })
    });
  });

}]);

goalsApp.controller('GoalCtrl', ['$scope','$http',function($scope,$http) {

  $scope.complete = function() {
    $http
      .patch('/goals/' + $scope.goal.id, { complete: true })
      .then(function(response) {
        $scope.goal.completed = true;
      })
  }

}]);

goalsApp.controller('NewGoalCtrl',['$scope','$http','$window',function($scope,$http,$window){
  $scope.create = function() {
    $http
      .post('/goals',{
        name: $scope.goal.name,
        month: $scope.months[$scope.goal.month - 1],
        year: $scope.goal.year,
        complete: false
      })
      .then(function() {
        $window.location.reload();
      })
  }
}]);
