
var app = angular.module( 'app', ['ngRoute', 'firebase', 'naif.base64'] );

app.constant( 'firebaseRef', new Firebase( 'https://simpe-blog.firebaseio.com/' ) );

app.value( 'currentUser', {
	id: '',
	email: '',
	avatar: '',
	isLogged: false,
});

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
			templateUrl: 'app/views/posts.html'
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

		.when( '/post/:id', {
			templateUrl: 'app/views/single.html',
			controller: 'PostsController',
		})

		// Admin Views

		.when( '/admin', {
			templateUrl: 'app/views/admin/index.html',
			controller: 'AdminController',
			resolve: {
				'currentAuth': ['Auth', function(Auth) {
					return Auth.$requireAuth();
				}]
			}
		})

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
