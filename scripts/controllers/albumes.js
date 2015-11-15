//controlador para los albumes
angular.module('jeviteca').controller('AlbumesCtrl', ['$scope', 'Albumes', '$location', function($scope,Albumes, $location){

	$scope.albumes = Albumes.data;

	//apertura de la vista de detalle de albumes
	$scope.vistaDetalleAlbum = function(idAlbum) {
		$location.path("/albumes/todos/" + idAlbum);
	};

}]);