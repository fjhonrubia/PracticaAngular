//controlador para los géneros fávoritos
angular.module('jeviteca').controller('GenerosFavsCtrl', ['$scope', 'Generos', function($scope, Generos){

	$scope.generos = Generos;
	
}]);