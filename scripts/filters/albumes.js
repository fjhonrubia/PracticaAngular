//filtro para formatear el listado de albumes
angular.module('jeviteca').filter('Albumes', [function(){
    return function(arr) {
        var listaAlbumes = '';
        for (var idx in arr) {
            listaAlbumes = listaAlbumes + ', ' + arr[idx].title;
        }
        listaAlbumes = listaAlbumes.substring(1);
        return listaAlbumes;
    };
}]);
