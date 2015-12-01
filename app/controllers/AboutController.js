app.controller( 'AboutController', function( $rootScope, $location ){

	$rootScope.pageTitle = 'About Us';
	$rootScope.pageUrl = $location.path();

});