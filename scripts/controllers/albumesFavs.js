//controlador para los albumes favoritos
angular.module('jeviteca').controller('AlbumesFavsCtrl', ['$scope', 'Albumes', function($scope,Albumes){

	$scope.albumes = Albumes;

}]);