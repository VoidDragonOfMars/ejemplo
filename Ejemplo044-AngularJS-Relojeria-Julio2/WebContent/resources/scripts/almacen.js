

relojesApp.constant("$dataUrl", "datos/relojes.json");

var relojesAppCtrl = relojesApp.controller(
		"relojesAppCtrl", ["$scope", "$http", "$dataUrl", function($scope, $http, $dataUrl) {
		
			$scope.datos ={};
			
			
			$http.get($dataUrl).success(function(data){
				
				$scope.datos.relojes = data;
				console.log($scope.datos.relojes)
			}).error(function(err){
				$scope.datos.error = true;
			})
		}]);
