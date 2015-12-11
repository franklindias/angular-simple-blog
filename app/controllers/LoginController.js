app.controller( 'LoginController', ['$location', 'currentUser',
	function( $location, currentUser ) {

		if ( currentUser.isLogged ) {
			$location.path( '/admin' );
		}
				
	}
]);