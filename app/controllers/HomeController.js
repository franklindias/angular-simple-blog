app.controller( 'HomeController', function( $rootScope, $location ){

	$rootScope.pageTitle = 'Simple Blog';
	$rootScope.pageUrl = $location.path();

});