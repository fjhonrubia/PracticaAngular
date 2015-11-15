angular.module('jeviteca').controller('DetalleAlbumCtrl', ['$scope', 'Album', function($scope,Album){

    $scope.album = Album;

    // Volvemos atrás en el histórico del navegador.
    /*$scope.volver = function() {

        history.back();
    };*/

    $scope.getYouTubeLink = function(bandName, trackName) {
        var query = encodeURIComponent((bandName + ' ' + trackName ).toLowerCase());
        return 'https://www.youtube.com/results?search_query=' + query;
    }

}]);
