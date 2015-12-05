app.controller( 'PostsController', function( $routeParams, $location, $scope, $firebaseArray, $firebaseObject ) {

	var postsUrl = 'https://simpe-blog.firebaseio.com/posts/';
	$scope.categories = ['General'];
	$scope.thumbnail = [''];
	$scope.posts = $firebaseArray( new Firebase( postsUrl ) );
	$scope.post = $firebaseObject( new Firebase( postsUrl + $routeParams.id ) );

	var hasPost = function() {

		if ( $scope.post.$id != 'undefined' ) {
			return true;
		}

		return false;
	};

	$scope.addPost = function() {

		// var onDone = function( res ) {
		// 	$location.path( '/admin/edit/' + res.path.o[1] );
		// };

		$scope.posts.$add({
			title: $scope.title,
			content: $scope.content,
			categories: $scope.categories,
			thumbnail: $scope.thumbnail,
			date: Firebase.ServerValue.TIMESTAMP,
			date_modified: Firebase.ServerValue.TIMESTAMP,
		});

	};

	$scope.editPost = function() {
		var post = new Firebase( postsUrl + $routeParams.id );
		post.update({
			title: $scope.post.title,
			content: $scope.post.content,
			categories: $scope.post.categories,
			thumbnail: $scope.post.thumbnail,
			date_modified: Firebase.ServerValue.TIMESTAMP,
		});
	};

	$scope.addCategory = function() {

		if ( ! hasPost() ) {
			$scope.categories.push( $scope.category );
			$scope.category = null;
			return;
		}

		$scope.post.categories.push( $scope.post.category );
		$scope.post.category = null;
	};

	$scope.removeCategory = function( $id ) {

		if ( ! hasPost() ) {
			$scope.categories.splice( $id, 1 );
			return;
		}

		$scope.post.categories.splice( $id, 1 );
	};

	$scope.removeThumbnail = function() {
		if ( ! hasPost() ) {
			$scope.thumbnail = '';
			return;
		}

		$scope.post.thumbnail = '';
	};

});