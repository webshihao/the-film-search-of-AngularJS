(function(angular){
	var app = angular.module('moviecat.http_jsonp',[]);
	app.service('myHttp', ['$window',function ($window) {
		this.jsonp = function(url,args,fn){
			//拼接地址 ?start=0&count=3
			var querystring = '';
			for(var key in args){
				querystring += key + '=' + args[key] + '&'; 
			}
			url += '?' + querystring;
			var callbackName = 'jsonp_' + Math.random().toString().substr(2);
			$window[callbackName] = function(data){
				fn(data);
				$window.document.body.removeChild(scriptElement);
			}
			// window.jsonpXXX = fn;
			url += 'callback=' + callbackName;
			var scriptElement = $window.document.createElement('script');
			scriptElement.src = url;
			$window.document.body.appendChild(scriptElement);
		}
	}])
})(angular)