/**
 * 
 */

relojesApp.controller("resumenCarroCtrl",[
	"$carro", "$scope", function($carro, $scope){
		 
		$scope.datosCarro = $carro.contenidoCarro();
		
		
		$scope.total = function(){
			var total = 0;
			for (var i = 0; i < $scope.datosCarro.length; i++){
				var item = $scope.datosCarro[i];
				
				var unidades = item.cantidad;
				
				var precioUnidad = item.precio;
				
				total += unidades * precioUnidad;
			}
			return total;
		}
		
		
		$scope.eliminar = function(idReloj){
			$carro.eliminarReloj(idReloj);
		}
		
	}
]);