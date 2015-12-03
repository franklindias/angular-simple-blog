app.controller( 'PostsController', function( $scope, $routeParams, $firebaseArray, $firebaseObject ) {

	var postsUrl = 'https://simpe-blog.firebaseio.com/posts/';

	$scope.posts = $firebaseArray( new Firebase( postsUrl ) );
	$scope.post = $firebaseObject( new Firebase( postsUrl + $routeParams.id ) );

	$scope.addPost = function() {

		// $scope.alertMsg = null;

		// // if ( ! ( $scope.title && $scope.content ) ) {
		// // 	$scope.alertMsg = "It's necessary complete Title and Content fields!";
		// // 	return;
		// // }

		$scope.posts.$add({
			title: $scope.title,
			content: $scope.content,
			date: Firebase.ServerValue.TIMESTAMP
		});
	};

	$scope.editPost = function() {
		var ref = new Firebase( postsUrl ).child( $routeParams.id );
		ref.update({
			title: $scope.post.title,
			content: $scope.post.content,
			date_modified: Firebase.ServerValue.TIMESTAMP,
		});
	};

	$scope.addCategory = function() {
		var ref = new Firebase( postsUrl ).child( $routeParams.id ).child( 'categories' );
		ref.push( $scope.post.category );
	};

	$scope.removeCategory = function( $id ) {
		var ref = new Firebase( postsUrl ).child( $routeParams.id ).child( 'categories' ).child( $id );
		ref.remove();
	};

});