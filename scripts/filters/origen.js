//Filtro para procesar el origen de las bandas
angular.module('jeviteca').filter('Origen', [function(){
    return function (origen) {
      var origenArr = origen.split(",");
        return "Ciudad: " + origenArr[0] + ", Estado: " + origenArr[1] + ", País: " + origenArr[2];
    };
}]);
