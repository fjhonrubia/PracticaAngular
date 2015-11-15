//directiva que representa cada fila en la tabla de albumes favoritos
angular.module('jeviteca').directive('elementoAlbumFav', [function(){
	return {
		restrict: 'A',
		templateUrl: 'views/elementoAlbumFav.html',
		scope: {
			album: '='
		}
	};
}]);