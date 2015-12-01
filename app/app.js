
var app = angular.module( 'app', ["ngRoute", "firebase"] );

app.config( function( $routeProvider, $locationProvider ) {

	// $locationProvider.html5Mode({
	// 		enabled: true,
	//    	requireBase: true
	// });

	$routeProvider

		.when( '/', {
			templateUrl: 'app/views/posts.html',
			controller: 'HomeController',
		})

		.when( '/about', {
			templateUrl: 'app/views/about.html',
			controller: 'AboutController',
		})

		.otherwise( { redirectTo: '/' } );

});
