app.controller( 'LoginController', ['$scope', '$location', '$firebaseObject', 'firebaseRef', 'currentUser',
	function( $scope, $location, $firebaseObject, firebaseRef, currentUser ) {

		var authData = firebaseRef.getAuth();

		if ( authData ) {
			currentUser.id       = authData.uid;
			currentUser.email    = authData.password.email;
			currentUser.avatar   = authData.password.profileImageURL;
			currentUser.isLogged = true;

			$scope.user = $firebaseObject( firebaseRef.child( 'users' ).child( currentUser.id ) );
		}

		$scope.logout = function() {
			$location.path( '/login' );
			firebaseRef.unauth();
		}

		console.log( authData );
		
	}
]);