var goalsApp = angular.module('goalsApp',[]);

goalsApp.controller('AppCtrl', function($scope,$http) {

  $scope.currentYear = (new Date()).getFullYear();

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
        name: row.name,
        completed: row.complete
      })
    });
  });

});

goalsApp.controller('GoalCtrl', function($scope) {

  $scope.complete = function() {
    $scope.years[$scope.year][$scope.month][$scope.goalId].completed = true;
  }

});
