//Filtro para listar los tracks anteponiendoles el número a partir de una colección
angular.module('jeviteca').filter('ListaTracks', [function(){
    return function(collection) {
        return collection.join(", ");
    };
}]);
