//directiva que representa cada fila en la tabla de bandas
angular.module('jeviteca').directive('elementoAlbum', ['AlbumesProvider',function(AlbumesProvider){
	return {
		restrict: 'A',
		templateUrl: 'views/elementoAlbum.html',
		scope: {
			album: '=',
			onAlbumClick: '&'
		},
		link: function(scope) {
			scope.notificarClickAlbum = function() {
				scope.onAlbumClick({ idAlbum: scope.album.id });
			};

			scope.favoritos = function(){
				//agregar el album al objeto favoritos
				AlbumesProvider.saveFavsAlbum(scope.album);
			};
		}
	};
}]);