//Definición de la aplicación
angular.module('jeviteca', ['ngRoute', 'route-segment', 'view-segment', 'angular-loading-bar']);

//Configuración de las rutas de la aplicación
angular.module('jeviteca').config(['$routeProvider', '$routeSegmentProvider', function($routeProvider, $routeSegmentProvider){

	$routeSegmentProvider.when('/albumes', 'albumes');
	$routeSegmentProvider.segment('albumes',{
		controller:'MainAlbumesCtrl',
		templateUrl:'views/albumesPrincipal.html'
	});

	$routeSegmentProvider.when('/albumes/todos', 'albumes.Todos');
	$routeSegmentProvider.within('albumes').segment('Todos', {
		controller:'AlbumesCtrl',
		templateUrl:'views/albumes.html',
		resolve: {
			Albumes: ['AlbumesProvider', function(AlbumesProvider){
				return AlbumesProvider.getAlbumes();
			}]
		}
	});

	$routeSegmentProvider.when('/albumes/favoritos', 'albumes.Favoritos');
	$routeSegmentProvider.within('albumes').segment('Favoritos', {
		controller:'AlbumesFavsCtrl',
		templateUrl:'views/albumesFavs.html',
		resolve: {
			Albumes: ['AlbumesProvider', function(AlbumesProvider){
				return AlbumesProvider.getFavsAlbumes();
			}]
		}
	});

	$routeSegmentProvider.when('/albumes/todos/:idAlbum', 'albumes.ID');
	$routeSegmentProvider.within('albumes').segment('ID', {
		controller: 'DetalleAlbumCtrl',
		templateUrl: 'views/DetalleAlbum.html',
		resolve: {
			Album: ['AlbumesProvider', '$route', function(AlbumesProvider, $route){
				return AlbumesProvider.getAlbumId($route.current.params.idAlbum);
			}]
		}
	});

	$routeSegmentProvider.when('/bandas', 'bandas');
	$routeSegmentProvider.segment('bandas',{
		//controller:'MainBandasCtrl',
		templateUrl:'views/bandasPrincipal.html'
	});

	$routeSegmentProvider.when('/bandas/todos', 'bandas.Todos');
	$routeSegmentProvider.within('bandas').segment('Todos', {
		controller:'BandasCtrl',
		templateUrl:'views/bandas.html',
		resolve: {
			Bandas: ['BandasProvider', function(BandasProvider){
				return BandasProvider.getBandas();
			}]
		}
	});

	$routeSegmentProvider.when('/bandas/todos/:idBanda', 'bandas.ID');
	$routeSegmentProvider.within('bandas').segment('ID', {
		controller: 'DetalleBandaCtrl',
		templateUrl: 'views/DetalleBanda.html',
		resolve: {
			Banda: ['BandasProvider', '$route', function(BandasProvider, $route){
				return BandasProvider.getBandaId($route.current.params.idBanda);
			}]
		}
	});

	$routeSegmentProvider.when('/bandas/favoritos', 'bandas.Favoritos');
	$routeSegmentProvider.within('bandas').segment('Favoritos', {
		controller:'BandasFavsCtrl',
		templateUrl:'views/bandasFavs.html',
		resolve: {
			Bandas: ['BandasProvider', function(BandasProvider){
				return BandasProvider.getFavsBandas();
			}]
		}
	});

	$routeSegmentProvider.when('/generos', 'generos');
	$routeSegmentProvider.segment('generos',{
		controller:'MainGenerosCtrl',
		templateUrl:'views/generosPrincipal.html'
	});

	$routeSegmentProvider.when('/generos/todos', 'generos.Todos');
	$routeSegmentProvider.within('generos').segment('Todos', {
		controller:'GenerosCtrl',
		templateUrl:'views/generos.html',
		resolve: {
			Generos: ['GenerosProvider', function(GenerosProvider){
				return GenerosProvider.getGeneros();
			}]
		}
	});

	$routeSegmentProvider.when('/generos/favoritos', 'generos.Favoritos');
	$routeSegmentProvider.within('generos').segment('Favoritos', {
		controller:'GenerosFavsCtrl',
		templateUrl:'views/generosFavs.html',
		resolve: {
			Generos: ['GenerosProvider', function(GenerosProvider){
				return GenerosProvider.getFavsGeneros();
			}]
		}
	});

	//ruta por defecto
	$routeProvider.otherwise({
		redirect:'/albumes/todos'
	});

}]);
