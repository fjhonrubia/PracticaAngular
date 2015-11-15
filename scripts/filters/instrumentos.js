angular.module('jeviteca').filter('Instrumentos', [function(){
    return function(collection) {
        return "Instrumentos: " + collection.join(", ");

    };

}]);
