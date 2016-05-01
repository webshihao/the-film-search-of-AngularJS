(function(angular){
	var app = angular.module('moviecat.movieList',['ngRoute','moviecat.http_jsonp']);
	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/:movieType/:page?', {
			templateUrl: 'movieList/view.html',
			controller: 'movieListCtrl'
		})
	}])
	app.controller('movieListCtrl', ['$scope','$http','$routeParams','$route','myHttp', function ($scope,$http,$routeParams,$route,myHttp) {
		var pageSize = 5;
		$scope.page = ($routeParams.page - 0) || 1;
		var start = ($scope.page - 1) * pageSize;
		$scope.allCount = 0;
		$scope.loading = true;
		myHttp.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType+'?q='+$routeParams.q,{
			start: start,
			count: pageSize
		},function(data){
			console.log(data)
			$scope.data = data;
			$scope.allCount = data.total;
			$scope.allPage = Math.ceil($scope.allCount/pageSize);
			$scope.loading = false;
			$scope.$apply();
			//分页: 每页显示多少 第几页 第几条数据
		         // 5             1      0,1,2,3,4
		         // 5             2      5,6,7,8,9
		         // 5             3      10,11,12,13,14	
		});
		$scope.newPage = function(newpage){
			if(newpage<1 || newpage>$scope.allPage){
				return;
			}
			// 更新路由参数 把整个控制器再执行一遍
			$route.updateParams({page: newpage})
		}
	}])
})(angular)