app.controller( 'AuthController', ['$scope', '$location', '$firebaseAuth', 'firebaseRef', 'currentUser',
	function( $scope, $location, $firebaseAuth, firebaseRef, currentUser ) {

		// Redirect if is logged.
		if ( currentUser.isLogged ) {
			$location.path( '/admin' );
		}

		$scope.login = function() {
			var auth = $firebaseAuth( firebaseRef );

			auth.$authWithPassword({
				email: $scope.email,
				password: $scope.password
			}).then( function ( authData ) {
				$location.path( '/admin' );
			}).catch( function ( error ) {
				console.error( 'Login Failed!', error );
			});
		}
	}
]);