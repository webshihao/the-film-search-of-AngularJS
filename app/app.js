(function (angular) {
    "use strict";

    var app = angular.module('moviecat',['moviecat.home_page','moviecat.movie_detail','moviecat.movieList','moviecat.auto_active','ngRoute']);
    app.config(['$routeProvider',function ($routeProvider) {
    	$routeProvider.otherwise({ redirectTo: '/home_page' })
    }])
   app.controller('mainController',[
       '$scope',
       '$route',function($scope,$route){
       $scope.query = '';
       //console.log(query);
       $scope.search=function(){
           $route.updateParams({q:$scope.query,movieType:'search'});
       }
   }])
})(angular);