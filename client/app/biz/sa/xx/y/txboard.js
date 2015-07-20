bindController({
	path:'/01',
	name:'txboard01Ctr',
	tpl:'/biz/sa/xx/y/txboard01',
	controller:['$scope',function($scope){

	}]
}, true);

bindController({
	path:'/02/:no',
	name:'txboard02Ctr',
	tpl:'/biz/sa/xx/y/txboard02',
	controller:['$scope',function($scope){
		console.log($scope.top.params);
	}]
});

