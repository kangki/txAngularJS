app.controller('coreCtr', ['$scope', function($scope){
	var core = this;
	core.getName = function(){
		return '홍길동';
	};
}]);

app.controller('topCtr', ['$scope','$routeParams', function($scope,$routeParams){
	var top = this;
	top.getName = function(){
		return '홍길동';
	};
	top.params = $routeParams;
}]);