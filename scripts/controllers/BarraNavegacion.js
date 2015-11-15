// controlador de la barra de navegación
angular.module('jeviteca').controller('BarraNavegacionCtrl', ['$scope', '$route', function($scope, $route){

	//Comprobación ruta navegada = "/albumes"
	$scope.rutaAlbumes = function() {
	
		return $route.current && $route.current.$$route.originalPath === '/albumes';
	};
	
	//Comprobación ruta navegada = "/bandas"
	$scope.rutaBandas = function() {
	
		return $route.current && $route.current.$$route.originalPath === '/bandas';
	};
	
	//Comprobación ruta navegada = "/bandas"
	$scope.rutaGeneros = function() {
	
		return $route.current && $route.current.$$route.originalPath === '/generos';
	};
	
}]);	