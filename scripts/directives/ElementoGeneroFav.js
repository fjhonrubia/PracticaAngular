//directiva que representa cada fila en la tabla de géneros favoritos
angular.module('jeviteca').directive('elementoGeneroFav', [function(){
	return {
		restrict: 'A',
		templateUrl: 'views/elementoGeneroFav.html',
		scope: {
			genero: '='
		}
	};
}]);