app.config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo:'/01'});
    $routeProvider.when('/01',{ templateUrl:'/views/biz/sa/xx/y/txboard01.tpl', controller:'txboard01Ctr'});
}]);

app.controller('txboard01Ctr', ['$scope','$log', function($scope,$log){
	var top = 
	$log.debug($scope);
}])