;(function(){
	'use strict';
	var app = angular.module('app');

	// 02. Route 선언
	app.config(['$routeProvider',function($routeProvider){
	  $routeProvider.otherwise({redirectTo:'/'});
	  $routeProvider.when('/',{templateUrl:'/view/tx002.tpl',controller:'viewController'});
	}]);

	app.controller('viewController', ['$scope', function($scope){
	  $scope.name = '김철수';
	}]);
})();

