app.controller( 'AboutCtrl', function( $rootScope, $location ){

	$rootScope.pageTitle = 'About Us';
	$rootScope.pageUrl = $location.path();

});