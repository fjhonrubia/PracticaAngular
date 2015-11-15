//controlador para las bandas favoritas
angular.module('jeviteca').controller('BandasFavsCtrl', ['$scope', 'Bandas', function($scope,Bandas){

	$scope.bandas = Bandas;

}]);