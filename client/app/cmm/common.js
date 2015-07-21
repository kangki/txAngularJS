app.controller('cmmCtr', ['$scope','$routeParams',function($scope,$routeParams){
	var cmm = this;
	cmm.http = $http;
	cmm.routeParams = $routeParams;
}]);


