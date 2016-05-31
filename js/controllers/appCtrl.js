angular.module('oficina').controller('appCtrl', function($scope, osAPIService){	
	$scope.headerTitle = 'Sistema de Gerenciamento Oficinas';
	
	$scope.osCollection = osAPIService.listAll();
});