(function(angular){
	var app = angular.module('moviecat.movie_detail',['ngRoute']);
	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/details/:id', {
			templateUrl: 'movie_detail/view.html',
			controller: 'movieController'
		})
	}])
	app.controller('movieController', ['$scope',
	'$location',
	'$routeParams',
	'myHttp',
	function ($scope,$location,$routeParams,myHttp) {
		myHttp.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
			$scope.data = data;
			$scope.$apply();
		})
	}])
})(angular);