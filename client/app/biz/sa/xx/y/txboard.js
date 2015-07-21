/* txboard 목록 */
bindController({
	path:'/01',
	name:'txboard01Ctr',
	tpl:'/biz/sa/xx/y/txboard01',
	controller:['$scope',function($scope){

	}]
}, true);

/* txboard 상세 */
bindController({
	path:'/02/:no',
	name:'txboard02Ctr',
	tpl:'/biz/sa/xx/y/txboard02',
	controller:['$scope',function($scope){
		var cmm = $scope.cmm;
		var top = $scope.top;
	}]
});

/* txboard 수정 */
bindController({
	path:'/03/:no',
	name:'txboard03Ctr',
	tpl:'/biz/sa/xx/y/txboard03',
	controller:['$scope',function($scope){
		var cmm = $scope.cmm;
		var top = $scope.top;
	}]
});
