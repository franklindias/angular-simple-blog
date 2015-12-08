
var app = angular.module( 'app', ['ngRoute', 'firebase', 'naif.base64'] );

app.factory( 'Auth', ['$firebaseAuth', function( $firebaseAuth ) {
	var ref = new Firebase( 'https://simpe-blog.firebaseio.com/' );
	return $firebaseAuth(ref);
}]);

app.run( ['$rootScope', '$location', function( $rootScope, $location ) {
	$rootScope.$on('$routeChangeError', function(event, next, previous, error) {
		if (error === 'AUTH_REQUIRED') {
			$location.path( '/login' );
		}
	});
}]);

app.config( ['$routeProvider', function( $routeProvider, $locationProvider ) {

	// $locationProvider.html5Mode({
	// 		enabled: true,
	//    	requireBase: true
	// });

	$routeProvider

		.when( '/', {
			templateUrl: 'app/views/posts.html',
			controller: 'HomeController'
		})

		.when( '/login', {
			templateUrl: 'app/views/login.html',
			controller: 'LoginController',
			resolve: {
				'currentAuth': ['Auth', function(Auth) {
					return Auth.$waitForAuth();
				}]
			}
		})

		.when( '/about', {
			templateUrl: 'app/views/about.html',
			controller: 'AboutController',
			resolve: {
				'currentAuth': ['Auth', function(Auth) {
					return Auth.$requireAuth();
				}]
			}
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

}]);
