//controlador para las bandas
angular.module('jeviteca').controller('BandasCtrl', ['$scope', 'Bandas', '$location', function($scope,Bandas,$location){

	$scope.bandas = Bandas.data;

	//apertura de la vista de detalle de bandas
	$scope.vistaDetalleBanda = function(idBanda) {
		//alert('Apertura de la vista de detalle de la banda');
		$location.path("/bandas/todos/" + idBanda);
	};
	
}]);