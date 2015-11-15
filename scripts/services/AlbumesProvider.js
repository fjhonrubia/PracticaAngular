//servicio para los albumes
angular.module('jeviteca').service('AlbumesProvider',['$http', '$q', function($http, $q){
	
	//obtener todos los albumes
	this.getAlbumes = function() {
		return $http.get('data/albums.json');
	};

	//obtener album por un id
	this.getAlbumId = function(idAlbum) {
		return $http.get('data/albums.json').then(

				//si fue OK se recuperan los datos
				function(datos) {
					var deferred = $q.defer();
					var album;
					for (var idx in datos.data) {
						if (idAlbum == datos.data[idx].id) {
							album = datos.data[idx];
						}
					}
					deferred.resolve(album);
					return deferred.promise;
				},

				//si dio error se muestra un mensaje
				function(err) {
					alert('Ocurrió un error recuperando los datos');
				}
		)
	};

	//obtener los albumes favoritos del usuario
	this.getFavsAlbumes = function() {

		var deferred = $q.defer();
		var albumesFavs;

		if (typeof(Storage) !== 'undefined') {
			//return JSON.parse(localStorage.getItem('AlbumesFavs'));
			albumesFavs = JSON.parse(localStorage.getItem('AlbumesFavs5'));
			deferred.resolve(albumesFavs);
			return deferred.promise;
		} else {
			deferred.reject("Error en la obtención de Álbumes favoritos");
			return deferred.promise;
		}
	};

	//almacenar el album favorito de un usuario
	this.saveFavsAlbum = function(Album) {
		if (typeof(Storage) !== 'undefined') {

			//se obtienen los albumes favoritos que se han almacenado
			var albumesFavs = [];
			if (JSON.parse(localStorage.getItem('AlbumesFavs5'))) {
				albumesFavs = JSON.parse(localStorage.getItem('AlbumesFavs5'));

				var encontrado = false;
				//antes de almacenar el album se comprueba si ya existe en favoritos
				for (var idx in albumesFavs) {
					if (albumesFavs[idx].id === Album.id) {
						encontrado = true;
					}
				}

				if (!encontrado) {
					albumesFavs.push(Album);
				}

			} else {
				albumesFavs.push(Album);
			}

			//se vuelve a serializar el objeto y a almacenarlo en el localStorage
			localStorage.setItem('AlbumesFavs5', JSON.stringify(albumesFavs));
		}
	};

}]);