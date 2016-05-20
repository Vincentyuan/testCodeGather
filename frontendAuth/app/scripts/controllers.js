'use strict';

/* Controllers */

angular.module('angularRestfulAuth')
    .controller('HomeCtrl', ['$rootScope', '$scope', '$location', '$localStorage', 'Main', function($rootScope, $scope, $location, $localStorage, Main) {

        $scope.signin = function() {
            var formData = {
                email: $scope.email,
                password: $scope.password
            }

            Main.signin(formData, function(res) {
			//	alert("success");
                if (res.type == false) {
                //    alert(res);
				   
                } else {
				//	alert(res.JWT);
                    $localStorage.token = res.jwt;
				//	alert($localStorage.token);
					$rootScope.addin="added";
                    window.location = "/footovision/test/frontendAuth/app/index.html#/signin";
                }
            }, function() {
				alert("failed to load ");
                $rootScope.error = 'Failed to signin';
            })
        };

        $scope.testGet=function(){
            alert("send token to check");
            Main.testGet(function(){
                alert("get response success");
            },function(){
                alert("fail to get data from server");
            });
        }

        $scope.signup = function() {
            var formData = {
                email: $scope.email,
                password: $scope.password
            }

            Main.save(formData, function(res) {
                if (res.type == false) {
                    alert(res.data)
                } else {
                    $localStorage.token = res.data.token;
                    window.location = "/"    
                }
            }, function() {
                $rootScope.error = 'Failed to signup';
            })
        };

        $scope.me = function() {
            Main.me(function(res) {
                $scope.myDetails = res;
            }, function() {
                $rootScope.error = 'Failed to fetch details';
            })
        };

        $scope.logout = function() {
            Main.logout(function() {
                window.location = "./index.html#/signin"
            }, function() {
                alert("Failed to logout!");
            });
        };
        $scope.token = $localStorage.token;
    }])

.controller('MeCtrl', ['$rootScope', '$scope', '$location', 'Main','$localStorage', function($rootScope, $scope, $location,$localStorage, Main) {

        $scope.me=function() {
            alert("ok");
            Main.me(function (res) {
                $scope.myDetails = res;
            }, function () {
                $rootScope.error = 'Failed to fetch details';
            })

        }
}]);
