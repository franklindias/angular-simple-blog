
var app = angular.module( 'app', ['ngRoute', 'firebase', 'naif.base64'] );

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

		.when( '/post/:id', {
			templateUrl: 'app/views/single.html',
			controller: 'PostsController',
		})

		// Admin Views

		.when( '/admin/:target?', {
			templateUrl: 'app/views/admin/index.html',
			controller: 'AdminController',
		})

		.when( '/admin/:action/:id', {
			templateUrl: 'app/views/admin/index.html',
			controller: 'AdminController',
		})

		.otherwise( { redirectTo: '/' } );

});
