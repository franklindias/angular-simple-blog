app.controller( 'HomeCtrl', function( $rootScope, $location ){

	$rootScope.pageTitle = 'Simple Blog';
	$rootScope.pageUrl   = $location.path();

});