angular.module('oficina').controller('osCtrl', function($scope, osAPIService){	
	$scope.osCollection = osAPIService.listAll();
});