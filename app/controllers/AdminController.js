app.controller( 'AdminController', function( $rootScope, $routeParams ){
	
	var params = $routeParams;

	$rootScope.adminView = 'home';

	if ( params.target ) {
		$rootScope.adminView = params.target;
	}

	if ( params.action === 'edit' ) {
		$rootScope.adminView = 'edit';
	}

});