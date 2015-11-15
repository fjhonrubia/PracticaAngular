//directiva que representa cada fila en la tabla de bandas favoritos
angular.module('jeviteca').directive('elementoBandaFav', [function(){
	return {
		restrict: 'A',
		templateUrl: 'views/elementoBandaFav.html',
		scope: {
			banda: '='
		}
	};
}]);