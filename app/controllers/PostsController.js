app.controller( 'PostsController', function( $scope, $routeParams, $firebaseArray, $firebaseObject ) {

	var postsUrl = 'https://simpe-blog.firebaseio.com/posts/';

	$scope.posts = $firebaseArray( new Firebase( postsUrl ) );
	$scope.post = $firebaseObject( new Firebase( postsUrl + $routeParams.id ) );

	$scope.addPost = function() {

		$scope.alertMsg = "";

		if ( ! ( $scope.title && $scope.body ) ) {
			$scope.alertMsg = "It's necessary complete Title and Content fields!";
			return;
		}

		$scope.posts.$add({
			title: $scope.title,
			body: $scope.body
		});
	};

});