/* -- CONFIG -- */

var appname = 'app';
var app = angular.module(appname, ['ngRoute']);

angular.element(document).ready(function() {
	angular.bootstrap(document, [appname]);
});

/* -- PRIVATE -- */

function bindController(data, otherwise) {
	app.config(['$routeProvider', 'routeResolverProvider', function($routeProvider, routeResolverProvider) {
		!!otherwise && $routeProvider.otherwise({
			redirectTo: data.path
		});

		$routeProvider.when(data.path, routeResolverProvider.resolve(data));
	}]).controller(data.name, data.controller);
}
