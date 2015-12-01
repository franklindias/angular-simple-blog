app.controller( 'PostsController', function( $scope, $firebaseArray ) {

	var ref = new Firebase( 'https://simpe-blog.firebaseio.com/posts' );

	$scope.posts = $firebaseArray(ref);

	var randonID = function() {
		return Math.floor( ( Math.random() * 10 ) + 1 );
	};

	$scope.addPost = function() {
		$scope.posts.$add({
			title: $scope.title,
			body: $scope.body
		});
	};

});