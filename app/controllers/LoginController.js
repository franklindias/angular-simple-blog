app.controller( 'LoginController', ['currentAuth', '$scope', '$location', function( currentAuth, $scope, $location ) {

	$scope.login = function() {
		// $location.path( '/about' );
		var ref = new Firebase( 'https://simpe-blog.firebaseio.com/' );
		ref.authWithPassword({
			email: $scope.email,
			password: $scope.password
		}, function( error, authData ){
			if ( error ) {
				$scope.errorMsg = error;
			} else {
				
			}
		});	
	}
		
}]);