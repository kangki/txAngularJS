
//'use strict';
// 01. 모듈선언
var app = angular.module('app', ['ngRoute']);

// 02. 컨트롤러선언
app.controller('layoutController', ['$scope',function($scope){
  this.name = "this ############# TEST";
  $scope.name = "scope ############ TEST";
}]);    


