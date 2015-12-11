app.controller( 'ProfileController', ['$scope', '$location', '$firebaseObject', 'firebaseRef', 'currentUser',
	function( $scope, $location, $firebaseObject, firebaseRef, currentUser ) {

		if ( currentUser.id === null ) {
			return;
		}

		var user = firebaseRef.child( 'users' ).child( currentUser.id );
		$scope.user = $firebaseObject( user );

		// Set default values if current user hasn't.
		user.once( 'value', function( snapshot ) {
			if ( snapshot.val() === null ) {
				setDefault();
			}
		});

		$scope.update = function() {
			user.update({
				name: $scope.user.name,
				avatar: $scope.user.avatar,
				bio: $scope.user.bio,
			});
		}

		function setDefault(){
			user.set({
				name: '',
				email: currentUser.email,
				avatar: currentUser.avatar,
				bio: '',
			});
		}

	}
]);