var goalsApp = angular.module('goalsApp',[
  'ngStorage'
]);

goalsApp.controller('AppCtrl', function($scope,$http,$localStorage) {

  $scope.currentYear = (new Date()).getFullYear();

  $http.get('data.json').then(function successCallback(response){
    console.debug(response);
    $scope.$storage = $localStorage.$default({years: response.data});
  });

});

goalsApp.controller('GoalCtrl', function($scope) {

  $scope.complete = function() {
    $scope.$storage.years[$scope.year][$scope.month][$scope.goalId].completed = true;
  }

});
