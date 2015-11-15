angular.module('jeviteca').controller('DetalleBandaCtrl', ['$scope', 'Banda', function($scope,Banda){

    $scope.banda = Banda;

    $scope.getWikipediaLink = function(bandName) {
        var query = encodeURIComponent(bandName);
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
    }
}]);
