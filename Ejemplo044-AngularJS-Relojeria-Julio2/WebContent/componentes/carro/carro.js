var carro = angular.module("carro", []);

carro.factory("$carro", function(){
	var datosCarro = [];
	
	return {
		agregarReloj: function(id, producto, precio){
			var esta = false;
			
			for(var i = 0; i < datosCarro.length; i++){
				
				var item = datosCarro[i];
				
				if(item.id === id){
					esta = true;
					
					item.cantidad += 1;
					break;
				}
			}
			if(!esta){
				
				datosCarro.push({
					id: id,
					producto: producto,
					precio: precio,
					cantidad: 1
				});
			}
		},
		eliminarReloj: function(){
			
			for(var i = 0; i < datosCarro.length; i++){
							
							var item = datosCarro[i];
							
							if(item.id === id){
								datosCarro.splice(i, 1)
								break;
							}
						}
			
			},
			contenidoCarro: function(){
				return datosCarro;
			}
	}
});


carro.directive("resumenCarro",["$carro", function($carro){
	return {
		restrict: "E",
		templateUrl: "componentes/carro/resumenCarro.html",
		controller: function($scope){
			var datosCarro = $carro.contenidoCarro();
			
			$scope.total = function(){
				var total = 0;
				for (var i = 0; i < datosCarro.length; i++){
					var item = datosCarro[i];
					
					var unidades = item.cantidad;
					
					var precioUnidad = item.precio;
					
					total += unidades * precioUnidad;
				}
				return total;
			}
			
			$scope.elementosCarro = function(){
				
				return datosCarro.length;
			}
		}
	}
}]);	
