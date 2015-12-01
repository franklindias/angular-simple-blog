
var app = angular.module( 'app', ['ngRoute'] );

app.config( function( $routeProvider, $locationProvider ) {

	// $locationProvider.html5Mode({
	// 		enabled: true,
	//    	requireBase: true
	// });

	$routeProvider

		.when( '/', {
			templateUrl: 'app/views/posts.html',
			controller: 'HomeCtrl',
		})

		.when( '/about', {
			templateUrl: 'app/views/about.html',
			controller: 'AboutCtrl',
		})

		.otherwise( { redirectTo: '/' } );

});
