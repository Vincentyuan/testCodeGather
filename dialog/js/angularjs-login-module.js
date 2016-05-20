//create an application and controller to control the login tag and
'use strict'

var app=angular.module('loginApp', [
    'ngStorage',
    'ngRoute',
    'angular-loading-bar'
]);


app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        $location.path('/signin');
                    }
                    return $q.reject(response);
                },
				'response':function(response){
			//		alert("response interceptor"+response.data);
					return response;
				}
            };
        }]);

    }
]);

app.controller("testCtrl",['$rootScope', '$scope', '$location', '$localStorage','$http', function($rootScope, $scope, $location, $localStorage,$http) {
 
  $scope.usersignin1 = function() {
      alert( "login button click");
   };

   $scope.userCancel=function(){
     alert("cancel was called");
   };
   

}]);
