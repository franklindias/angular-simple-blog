app.controller( 'AuthController', ['$scope', '$rootScope', '$location', '$firebaseAuth', '$firebaseObject', 'firebaseRef', 'currentUser',
	function( $scope, $rootScope, $location, $firebaseAuth, $firebaseObject, firebaseRef, currentUser ) {

		var ref = firebaseRef;

		$scope.login = function() {
			var auth = $firebaseAuth( ref );

			auth.$authWithPassword({
				email: $scope.email,
				password: $scope.password
			}).then( function ( authData ) {
				setUser( authData );
				$scope.user = $firebaseObject( ref.child( 'users' ).child( currentUser.id ) );
				console.log( $scope.user );
				$location.path( '/admin' );
			}).catch( function ( error ) {
				console.error( 'Login Failed!', error );
			});
		}

		$scope.logout = function() {
			unsetUser();
			ref.unauth();
			$location.path( '/login' );
		}

		function setUser( authData ){
			currentUser.id = authData.uid;
		}

		function unsetUser(){
			currentUser.id = null;
		}
	}
]);