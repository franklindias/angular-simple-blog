app.controller( 'PostsController', function( $routeParams, $location, $scope, $firebaseArray, $firebaseObject ) {

	var dataUrl = 'https://simpe-blog.firebaseio.com/posts/';
	var form = [
		{ name: 'title', value: '' },
		{ name: 'content', value: '' },
		{ name: 'categories', value: [''] },
		{ name: 'thumbnail', value: '' },
		{ name: 'date', value: Firebase.ServerValue.TIMESTAMP },
	];

	$scope.posts = $firebaseArray( new Firebase( dataUrl ) );
	$scope.post = $firebaseObject( new Firebase( dataUrl + $routeParams.id ) );

	if ( $scope.post.$id === 'undefined' ) {
		var post = {};

		form.map( function( el ) {
			post[el.name] = el.value;
		});

		$scope.post = post;
	}

	$scope.addPost = function() {
		$scope.posts.$add( $scope.post );
	};

	$scope.editPost = function() {
		var post = new Firebase( dataUrl + $routeParams.id )
		  , postForm = {}
		;

		form.map( function( el ) {
			postForm[el.name] = ( $scope.post[el.name] );
		});

		postForm['date_modified'] = Firebase.ServerValue.TIMESTAMP;

		post.update( postForm );
	};

	$scope.addCategory = function() {
		$scope.post.categories.push( $scope.category );
		$scope.category = null;
		return;
	};

	$scope.removeCategory = function( $id ) {
		$scope.post.categories.splice( $id, 1 );
		return;
	};

	$scope.removeThumbnail = function() {
		$scope.post.thumbnail = '';
		return;
	};

});