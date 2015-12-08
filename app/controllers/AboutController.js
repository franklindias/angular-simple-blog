app.controller( 'AboutController', ['currentAuth', '$scope', '$location', function( currentAuth, $scope, $location ){
		
	$scope.logout = function() {
		var ref = new Firebase( 'https://simpe-blog.firebaseio.com/' );
		ref.unauth();
		$location.path( '/' );
	}

}]);