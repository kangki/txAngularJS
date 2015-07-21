/* -- CONFIG -- */

var appname = 'app';
var app = angular.module(appname, ['ngRoute']);

angular.element(document).ready(function(){
	angular.bootstrap(document,[appname]);
});

/* -- PRIVATE -- */

function bindController(data, otherwise){
	app.config(['$routeProvider',function($routeProvider){
		!!otherwise && $routeProvider.otherwise({redirectTo:data.path});

		$routeProvider.when(data.path,{
			templateUrl:'/views'+data.tpl+'.tpl',
			controller:data.name,
			controllerAs:data.as || 'vm'
		});
	}]).controller(data.name,data.controller);
}
