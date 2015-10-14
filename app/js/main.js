var MyApp = angular.module("MyApp",["ngRoute"], function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');

})

.config(function($routeProvider,$locationProvider){        
       
	$routeProvider
		.when("/",{
			controller:"HomeCtrl",
			templateUrl: "views/home.html"
		})
		.when("/login",{
			controller:"LoginCtrl",
			templateUrl: "views/login.html",
		})
		.otherwise({
	        redirectTo: '/'
	    })

	//$locationProvider.html5Mode(true);
	//$locationProvider.hashPrefix('!');
	
})





.run(function($rootScope) {

	//listado de los menus de la barra superior
	$rootScope.greeting = "Hello world! this application is already running..."


})


