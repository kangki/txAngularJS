/* txboard 목록 */
bindController({
	path:'/01',
	name:'txboard01Ctr',
	tpl:'/biz/sa/xx/y/txboard01',
	controller:['$scope',function($scope){
		var cmm = $scope.cmm;
		var log = cmm.log('txboard01Ctr');

		log.out('----');

	}]
}, true);

/* txboard 상세 */
bindController({
	path:'/02/:no',
	name:'txboard02Ctr',
	tpl:'/biz/sa/xx/y/txboard02',
	controller:['$scope',function($scope){
		var cmm = $scope.cmm;
		var log = cmm.log('txboard02Ctr');

		log.out('----');

	}]
});
