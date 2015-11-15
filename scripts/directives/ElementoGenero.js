//directiva que representa cada fila en la tabla de géneros
angular.module('jeviteca').directive('elementoGenero', ['GenerosProvider',function(GenerosProvider){
	return {
		restrict: 'A',
		templateUrl: 'views/elementoGenero.html',
		scope: {
			genero: '='
		},
		link: function(scope) {
			scope.favoritos = function(){
				//agregar el genero al objeto favoritos
				GenerosProvider.saveFavsGenero(scope.genero);
			};
		}
	};
}]);