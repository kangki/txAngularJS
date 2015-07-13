// 04. Route 선언
app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .otherwise({redirectTo:'/'})
  .when('/',{ templateUrl:'/views/tx02.tpl', controller:'tx02Controller'})
  .when('/01',{ templateUrl:'/views/tx02.tpl', controller:'tx0201Controller'});
}]);

// 05. view 내부 Controller 선언
app.controller('tx02Controller', ['$scope','$location',function($scope,$location){
  $scope.name = 'tx02';
  $scope.go = function(){
    $location.path('/01');
  };
}]);

app.controller('tx0201Controller', ['$scope','$location',function($scope,$location){
  $scope.name = 'tx0201';
  $scope.go = function(){
    $location.path('/');
  };
}]);
