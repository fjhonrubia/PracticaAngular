//directiva que representa cada fila en la tabla de bandas
angular.module('jeviteca').directive('elementoBanda', ['BandasProvider',function(BandasProvider){
	return {
		restrict: 'A',
		templateUrl: 'views/elementoBanda.html',
		scope: {
			banda: '=',
			onBandaClick: '&'
		},
		link: function(scope) {
			scope.notificarClickBanda = function() {
				scope.onBandaClick({ idBanda: scope.banda.id });
			}

			scope.favoritos = function(){
				//agregar la banda al objeto favoritos
				BandasProvider.saveFavsBanda(scope.banda);
			};
		}
	};
}]);