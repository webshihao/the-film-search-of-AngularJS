(function(angular){
	var app = angular.module('moviecat.auto_active',[]);
	app.directive('autoActive', ['$location',function ($location) {
		return {
			restrict: 'A',
			link: function(scope,element,attrs){
				// $location.url();
				scope.loca = $location;
				scope.$watch('loca.url()',function(now,old){
					var a = element.children();
					var hash = a[0].hash.substr(1);
					// console.log($location.url())
					console.log(now)
					if(now.startsWith(hash)){
						element.parent().children().removeClass('active');
						element.addClass('active');
					}
				})
			}
		};
	}])
})(angular)